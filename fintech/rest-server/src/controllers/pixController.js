require("dotenv").config()

const Pix = require("../models/pix")
const debug = require("../services/debug")

module.exports = {

    async createKey(req, res) {

        try {

            console.log("Cria Chave Pix")

            return res.send({ message: "Cria Chave Pix" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async getKeys(req, res) {

        try {

            console.log("Get Chave Pix do usuário")

            return res.send({ message: "Get Chave Pix do usuário" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async updateKey(req, res) {

        try {

            console.log("Atualiza Chave Pix")

            return res.send({ message: "Atualiza Chave Pix" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async deleteKey(req, res) {

        try {

            console.log("Deleta Chave Pix")

            return res.send({ message: "Deleta Chave Pix" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async transfer(req, res) {

        try {

            console.log("Transferencia Pix")

            return res.send({ message: "Transferencia Pix" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

}