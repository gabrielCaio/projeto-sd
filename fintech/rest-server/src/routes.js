const router = require('express').Router()

// Middlewares
const auth = require('./middlewares/jwtAuth')

// Controllers
const userController = require('./controllers/userController')

// Routes
router.get('/test', (req, res) => res.send('Server Working!!!'))

// User Routes
router.post('/user', userController.create)
router.get('/user', userController.get)

module.exports = router