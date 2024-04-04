require("dotenv").config()

const Operation = require("../models/operation")
const debug = require("../services/debug")

module.exports = {

    async create(req, res) {

        try {

            console.log("Cria Operation")

            return res.send({ message: "Cria Operation" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async get(req, res) {

        try {

            console.log("Get Operation")

            return res.send({ message: "Get Operation" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

}