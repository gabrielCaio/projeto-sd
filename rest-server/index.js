const express = require('express')
const morgan = require('morgan')

const router = require('./src/routes')

const app_name = "rest-server"
const port = 3000

const app = express()

app.use(express.json())
app.use(morgan('dev'))
// app.use("/", router)

app.listen(port, () => {
  console.log(`${app_name} listening on port ${port}...`)
})