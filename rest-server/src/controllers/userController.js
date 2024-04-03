require('dotenv').config()
const bcrypt = require('bcryptjs')

const { rabbitManager, sendMessage, publishMessageWithResponse } = require('../services/rabbitmq')
const debug  = require('../services/debug')

function generateToken(props = {}) {
    return jwt.sign(props, process.env.SECRET_KEY, {
      expiresIn: 84600,
    })
}

const queue_name = 'user_data'

module.exports = {

    async create(req, res) {

        try {

            const { cpf, email, password, name } = req.body

            const hash = await bcrypt.hash(password, 10)

            let newUser = { cpf, email, hash, name }

            // TODO: send to web-server and save to database
            const resMsg = await publishMessageWithResponse('A', newUser, 'res_user_data')
    
            return res.send(resMsg)

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e })
        }
    },

    async login(req, res) {

        try {

            const { email, password } = req.body

            // TODO: get user from web-server and send token to login

            return res.send({ message: "login"})

        } catch (e) {
            return res.status(500).send({ error: e })
        }
    },

    async getUsers(req, res) {

        try {

            // TODO: get users from web-server and return
            users = {}

            return res.send(users)

        } catch (e) {
            return res.status(500).send({ error: e })
        }
    },

    async deleteUser(req, res) {

        try {

            // TODO: get user from jwt and send to web-server to delete

            return res.send({ message: "user deleted" })

        } catch (e) {
            return res.status(500).send({ error: e })
        }
    }

}