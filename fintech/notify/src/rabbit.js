const amqp = require('amqplib');

class RabbitMQManager {

    constructor() {

      this.connection = null
      this.channel = null

    }
  
    async connect() {
      this.connection = await amqp.connect(rabbit_url)
    }

    async getConnection() {
        if (!this.connection) await this.connect()

        return this.connection
    }
  
}

const rabbitManager = new RabbitMQManager()

async function consumeMessages() {

    const connection = await rabbitManager.getConnection()
    const channel = await connection.createChannel()
    
    // Define exchange and its bindings to message handlers
    const exchange = '';
    const bindings = [
        { routingKey: 'emitBoleto', handler: handleMessageA },
        { routingKey: 'pagaBoleto', handler: handleMessageB }
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

module.exports = { consumeMessages, rabbitManager }