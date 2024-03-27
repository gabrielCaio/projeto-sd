const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Server Working!!!')
})

router.get('/consume', async (req, res) => {

    try {

    await consumeMessages()

    res.send('Mensagem Consumida!')

    } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao consumir mensagem')
    }

})

module.exports = router