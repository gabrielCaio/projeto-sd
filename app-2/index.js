const express = require('express')

const router = require('./src/routes')

const app_name = 'APP-2'
const port = 3001

const app = express()

app.use(express.json())
app.use("/", router)

app.listen(port, () => {
    console.log(`${app_name} listening on port ${port}...`)
})