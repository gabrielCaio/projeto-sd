require("dotenv").config()

const Invoice = require("../models/invoice")
const debug = require("../services/debug")

module.exports = {

    async create(req, res) {

        try {

            console.log("Cria Fatura")

            return res.send({ message: "Cria Fatura" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async get(req, res) {

        try {

            console.log("Get Fatura Mais Recente")

            return res.send({ message: "Get Fatura Mais Recente" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async update(req, res) {

        try {

            console.log("Atualiza Fatura")

            return res.send({ message: "Atualiza Fatura" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async getAllInvoices(req, res) {

        try {

            console.log("Get All Invoices do usuário")

            return res.send({ message: "Get All Invoices do usuário" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async payInvoice(req, res) {

        try {

            console.log("Paga Invoice")

            return res.send({ message: "Paga Invoice" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

}