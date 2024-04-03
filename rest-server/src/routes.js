const express = require('express')

const router = express.Router()

const sendMessage = require('./services/rabbitmq')

// Import Controllers
const userController = require('./controllers/userController')

// JWT middleware authentication
const auth = require('./middlewares/jwt_auth')

// Test server
router.get('/test', (req, res) => res.send('Server Working!!!'))

// Test rabbit
// router.get('/send', async (req, res) => {

//     try {
  
//       await sendMessage();
  
//       res.send('Message sent to queue!')
  
//     } catch (error) {
//       console.error(error)
//       res.status(500).send('Error sending message to queue!')
//     }
// })

// User

router.post("/user/register", userController.create)
router.post("/user/login", userController.login)
router.get("/user", userController.getUsers)
router.delete("/user", userController.deleteUser)

module.exports = router