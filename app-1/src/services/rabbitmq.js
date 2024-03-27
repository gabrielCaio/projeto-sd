const amqp = require('amqplib')

const queue_name = 'test'
const rabbit_url = 'amqp://rabbitmq'

async function sendMessage() {

    const connection = await amqp.connect(rabbit_url)
    const channel = await connection.createChannel()

    await channel.assertQueue(queue_name, { durable: false })
    await channel.sendToQueue(queue_name, Buffer.from('Hello from Producer!'))

    console.log(" [x] Sent 'Hello from Producer!'")

    await channel.close()
    await connection.close()
}

module.exports = sendMessage