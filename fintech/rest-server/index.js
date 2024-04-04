require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const router = require('./src/routes')

const { APP_NAME, PORT } = process.env

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
app.listen(PORT, () => {
  console.log(`${APP_NAME} listening on port ${PORT}...`)
})
