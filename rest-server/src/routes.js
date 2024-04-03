const express = require('express')

const router = express.Router()

const sendMessage = require('./services/rabbitmq')

router.get('/', (req, res) => {
    res.send('Server Working!!!')
})

router.get('/send', async (req, res) => {

    try {
  
      await sendMessage();
  
      res.send('Message sent to queue!')
  
    } catch (error) {
      console.error(error)
      res.status(500).send('Error sending message to queue!')
    }
})

module.exports = router