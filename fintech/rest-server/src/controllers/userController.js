require("dotenv").config()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/user")
const debug = require("../services/debug")

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET_KEY, {
    expiresIn: 84600,
  })
}

module.exports = {

  async create(req, res) {

    try {

      let { password, operationalPassword, ...body } = req.body

      password = await bcrypt.hash(password, 10)
      operationalPassword = await bcrypt.hash(operationalPassword, 10)

      const data = { password, operationalPassword, ...body }

      const user = await User.create(data)

      user.password = undefined
      user.operationalPassword = undefined

      return res.send({ user, token: generateToken({ id: user.userId }) })

    } catch (e) {
      debug(e)
      return res.status(500).send({ error: e })
    }
  },

  async get(req, res) {

    try {

      const users = await User.findAll({
        attributes: { exclude: ['password', 'operationalPassword'] },
      })

      res.send(users)

    } catch (e) {
      debug(e)
      return res.status(500).send({ error: e })
    }
  },

  async login(req, res) {

    try {

      const { email, password } = req.body

      const user = await User.findOne({ where: { email: email }})

      if (!user) return res.status(400).send({ error: "User not found"})

      if (!(await bcrypt.compare(password, user.password))) return res.status(400).send({ error: "Password Invalid" })

      user.password = undefined
      user.operationalPassword = undefined

      const token = generateToken({id: user.id})

      return res.send({ user, token })

    } catch (e) {
      debug(e)
      return res.status(500).send({ error: e })
    }

  },

  async authenticate(req, res) {

    try {

      const id = req.userId

      const user = await User.findByPk(id)

      if (!user) return res.status(404).send({ error: "User not found" })

      user.password = undefined
      user.operationalPassword = undefined

      return res.send({ user, token: generateToken({ id }) })

    } catch (e) {
      debug(e)
      return res.status(500).send({ error: e })
    }

  },

  async addBalance(req, res) {
    try {

      const { userId, value } = req.body

      const user = await User.findByPk(userId)

      // TODO: Make this asyncronous (ProccessPayments)

      if (user) {
        user.balance = value
        await user.save()
      }

      return res.send({ message: "Pagamento está sendo processado" })

    } catch (e) {
      debug(e)
      return res.status(500).send({ error: e })
    }
  },

  async addCardLimit(req, res) {
    try {
      
      const id = req.userId
      
      const user = await User.findByPk(id)
      
      if (!user) return res.status(400).send({ error: "User not found"})

      // TODO: Make this asyncronous (ProccessPayments)

      return res.send({ message: "Your request was accepted succesifully" })

    } catch (e) {
      debug(e)
      return res.status(500).send({ error: e })
    }
  },

}