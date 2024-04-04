require('dotenv').config()

const { consumeMessages } = require('./src/services/rabbitmq')

const { APP_NAME } = process.env

console.log(`${APP_NAME} running`)

async function main () {

    while (true) {
        await consumeMessages()
    }

}

main()