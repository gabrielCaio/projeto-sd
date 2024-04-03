const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const router = require('./src/routes')

const app_name = "rest-server"
const port = 3000

const app = express()

// Add middlewares
app.use(express.json())
app.use(morgan('dev'))

// Allow CORS
app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")

  app.use(cors())

  next()
})

// Initialize routes
app.use("/", router)

// Start server
app.listen(port, () => {
  console.log(`${app_name} listening on port ${port}...`)
})