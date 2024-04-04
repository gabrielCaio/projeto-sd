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

      return res.send(user)

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

  async addBalance(req, res) {
    // TODO: Make this asyncronous
    try {

      const { userId, value } = req.body

      const user = await User.findByPk(userId)

      if (user) {
        user.balance = value
        await user.save()
      }

      return res.send({ message: "Money added!" })

    } catch (e) {
      debug(e)
      return res.status(500).send({ error: e })
    }
  },

  async addCardLimit(req, res) {
    // TODO: Make this asyncronous
    try {

      const id = req.userId

      const user = await User.findByPk(id)

      if (!user) return res.status(400).send({ error: "User not found"})

      return res.send({ message: "Your request was accepted succesifully" })

    } catch (e) {
      debug(e)
      return res.status(500).send({ error: e })
    }
  },

  async createPixKey(req, res) {
    // TODO: Make this asyncronous
    try {

      const id = req.userId

      const user = await User.findByPk(id)

      if (!user) return res.status(400).send({ error: "User not found"})

      return res.send({ message: "Your request was accepted succesifully" })

    } catch (e) {
      debug(e)
      return res.status(500).send({ error: e })
    }
  },

  async updatePixKey(req, res) {},

  async deletePixKey(req, res) {},

}