const router = require('express').Router()

// Middlewares
const auth = require('./middlewares/jwtAuth')

// Routes
router.get('/test', (req, res) => res.send('Server Working!!!'))

module.exports = router