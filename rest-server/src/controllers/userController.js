require('dotenv').config()
const bcrypt = require('bcryptjs');


module.exports = {

    async create(req, res) {

        try {

            const { cpf, email, password, name } = req.body

            const hash = await bcrypt.hash(password, 10)

            let newUser = { cpf, email, hash, name }

            // TODO: send to web-server and save to database
    
            return res.send(newUser)

        } catch (e) {

            return res.status(500).send({ error: e })

        }
    },

    async login(req, res) {

        try {

            const { email, password } = req.body

            // TODO: get user from web-server and send token to login

            return res.send({ message: "login"})

        } catch (e) {
            return res.status(500).send({ error: e });
        }
    },

    async getUsers(req, res) {

        try {

            // TODO: get users from web-server and return
            users = {}

            return res.send(users)

        } catch (e) {
            return res.status(500).send({ error: e });
        }
    },

    async deleteUser(req, res) {

        try {

            // TODO: get user from jwt and send to web-server to delete

            return res.send({ message: "user deleted" })

        } catch (e) {
            return res.status(500).send({ error: e });
        }
    }

}