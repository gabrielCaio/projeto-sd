const consumeMessages = require('./src/services/rabbitmq')

const app_name = 'web-server'
const port = 3001

console.log(`${app_name} listening on port ${port}...`)

consumeMessages()