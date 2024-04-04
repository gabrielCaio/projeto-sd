const router = require('express').Router()

// Middlewares
const auth = require('./middlewares/jwtAuth')

// Controllers
const boletoController = require('./controllers/boletoController')
const cardController = require('./controllers/cardController')
const invoiceController = require('./controllers/invoiceController')
const operationController = require('./controllers/operationController')
const pixController = require('./controllers/pixController')
const userController = require('./controllers/userController')

// Routes
router.get('/test', (req, res) => res.send('Server Working!!!'))

// User Routes
router.post('/user', userController.create)
router.get('/user', userController.get)
router.post('/login', userController.login)
router.get('/authenticate', auth, userController.authenticate)

// Boleto Routes
router.post('/boleto/emit', auth, boletoController.emitBoleto)
router.post('/boleto/pay', auth, boletoController.payBoleto)
router.get('/boleto', auth, boletoController.getUserBoletos)

// Card Routes
router.post('/card/create', auth, cardController.create)
router.get('/card/getCards', auth, cardController.getCards)
router.delete('/card/:cardId', auth, cardController.deleteCard)
router.post('/card/pay', auth, cardController.pay)

// Invoice Routes
router.post('/invoice/create', auth, invoiceController.create)
router.get('/invoice/latest', auth, invoiceController.get)
router.get('/invoice/all', auth, invoiceController.getAllInvoices)
router.patch('/invoice', auth, invoiceController.update)
router.post('/invoice/pay', auth, invoiceController.payInvoice)

// Operation Routes
router.get('/extrato', auth, operationController.get)

// Pix Routes
router.post('/pix/create', auth, pixController.createKey)
router.get('/pix/getKeys', auth, pixController.getKeys)
router.patch('/pix', auth, pixController.updateKey)
router.delete('/pix/:key', auth, pixController.deleteKey)
router.post('/pix/transfer', pixController.transfer)


module.exports = router