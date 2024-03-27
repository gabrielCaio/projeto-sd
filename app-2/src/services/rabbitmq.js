const amqp = require('amqplib')

const queue_name = 'test'
const rabbit_url = 'amqp://rabbitmq'

async function consumeMessages() {

    try {
  
      const connection = await amqp.connect(rabbit_url)
      const channel = await connection.createChannel()
  
      await channel.assertQueue(queue_name, { durable: false })
  
      console.log(` [*] Waiting for messages in ${queue_name}`)
  
      channel.consume(queue_name, msg => {
        console.log(` [x] Received ${msg.content.toString()}`)
      }, { noAck: true })
  
    } catch (error) {
      console.error(error)
    }
}

module.exports = consumeMessages