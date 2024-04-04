/*

const amqp = require('amqplib')

const rabbit_url = 'amqp://rabbitmq'

class RabbitMQManager {

    constructor() {

      this.connection = null
      this.channel = null
      this.exchange = null

    }
  
    async connect() {

      this.connection = await amqp.connect(rabbit_url)
      this.channel = await this.connection.createChannel()

    }
  
    async getChannel() {

      if (!this.channel) await this.connect()

      return this.channel

    }
}

const rabbitManager = new RabbitMQManager()

async function handleMessageA(message) {
    // Handle messages with routing key 'A'
    console.log(`Received message with routing key 'A': ${message.content.toString()}`);

    setTimeout(() => {
        const response = `Response to: ${message.content.toString()}`;
        console.log(`Sending response: ${response}`);

        // Reply to the message using the correlation ID
        channel.sendToQueue(message.properties.replyTo, Buffer.from(response), { correlationId: message.properties.correlationId });
        channel.ack(message);
    }, 1000);
}

async function handleMessageB(message) {
    // Handle messages with routing key 'B'
    console.log(`Received message with routing key 'B': ${message.content.toString()}`);

    setTimeout(() => {
        const response = `Response to: ${message.content.toString()}`;
        console.log(`Sending response: ${response}`);

        // Reply to the message using the correlation ID
        channel.sendToQueue(message.properties.replyTo, Buffer.from(response), { correlationId: message.properties.correlationId });
        channel.ack(message);
    }, 2000);
}


async function consumeMessages() {

    const channel = await rabbitManager.getChannel()
    
    // Define exchange and its bindings to message handlers
    const exchange = 'main';
    const bindings = [
        { routingKey: 'A', handler: handleMessageA },
        { routingKey: 'B', handler: handleMessageB }
    ];

    await channel.assertExchange(exchange, 'direct', { durable: true });

    await Promise.all(bindings.map(async (binding) => {
        const queue = await channel.assertQueue('', { exclusive: true });
        await channel.bindQueue(queue.queue, exchange, binding.routingKey);
        console.log(`Waiting for messages with routing key '${binding.routingKey}'...`);

        channel.consume(queue.queue, message => {
            binding.handler(message).catch(console.error);
        }, { noAck: true });
    }));
}


// async function consumeMessages() {

//     try {

//       const channel = await connection.createChannel()
  
//       await channel.assertQueue(queue_name, { durable: false })
  
//       console.log(` [*] Waiting for messages in ${queue_name}`)
  
//       channel.consume(queue_name, msg => {
//         console.log(` [x] Received ${msg.content.toString()}`)
//       }, { noAck: true })
  
//     } catch (error) {
//       console.error(error)
//     }
// }

module.exports = consumeMessages

===============================================================================================



*/