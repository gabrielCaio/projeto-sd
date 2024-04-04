require("dotenv").config()

const fintechId = process.env.FNAME || "fintechexample"

const Boleto = require("../models/boleto")
const debug = require("../services/debug")

async function generateRandomCode(digits = 40) {
    code = ""
    for (let i = 0; i < digits; i++) {
        code += Math.floor(Math.random() * 10)
    }
    return code
}

module.exports = {

    async emitBoleto(req, res) {

        try {

            const userId = req.userId
            const { value } = req.body
            const code = await generateRandomCode()

            const boleto = await Boleto.create({ code, value, userId, fintechId })

            return res.send({ boleto })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async payBoleto(req, res) {

        try {

            const userId = req.userId
            const { code } = req.body

            const body = { userId, code, type: "boleto" }

            await sendMessage("proccess_payment", )

            return res.send({ message: "paga Boleto" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

    async getUserBoletos(req, res) {

        try {

            console.log("Get boletos")

            return res.send({ message: "Get boletos" })

        } catch (e) {
            debug(e)
            return res.status(500).send({ error: e });
        }

    },

}