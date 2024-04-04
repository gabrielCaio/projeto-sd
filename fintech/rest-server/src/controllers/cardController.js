require("dotenv").config()

const Card = require("../models/card")
const debug = require("../services/debug")

module.exports = {

    async create(req, res) {

        try {

            console.log("Cria Cartao")

            return res.send({ message: "Cria Cartao" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async getCards(req, res) {

        try {

            console.log("Get cartaos")

            return res.send({ message: "Get cartaos" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async deleteCard(req, res) {

        try {

            console.log("Deleta Cartao")

            return res.send({ message: "Deleta Cartao" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async pay(req, res) {

        try {
            // Validate if credit card or debit card
            console.log("Paga Cartao Credito")

            return res.send({ message: "Paga Cartao Credito" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

}