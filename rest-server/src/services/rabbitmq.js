const amqp = require('amqplib')
const crypto = require('crypto')
const debug = require('./debug')

const rabbit_url = 'amqp://rabbitmq'
const mainExchange = 'main'

function randomHash() {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
            if (err) reject(err)
            resolve(buf.toString('hex'))
        })
    })
}

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

async function publishMessageWithResponse(routingKey, payload, resQueue) {

    try {

        const channel = await rabbitManager.getChannel()

        await channel.assertExchange(mainExchange, 'direct', { durable: true })

        const hash = await randomHash()

        channel.publish(mainExchange, routingKey, Buffer.from(JSON.stringify(payload)), {
            correlationId: hash, replyTo: resQueue
        })

        await channel.assertQueue(resQueue)

        return new Promise((resolve, reject) => {
            channel.consume(resQueue, (msg) => {
                if (msg.properties.correlationId === correlationId) {
                    const jsonMessage = JSON.parse(msg.content.toString())

                    console.log(`Received response: ${jsonMessage}`)
                    resolve(jsonMessage)

                    // channel.close()
                    // connection.close()
                }
            }, { noAck: true }).catch(err => reject(err))
        })
    } catch (e) {
        debug(e)
        throw new Error(e)
    }
}

async function sendMessage(queue, payload, resQueue) {

    try {

        const channel = await rabbitManager.getChannel()

        await channel.assertExchange(mainExchange, 'direct')

        const hash = await randomHash()
        
        await channel.assertQueue(queue, { durable: false })
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), {
            correlationId: hash,
            replyTo: resQueue,
        })

        return new Promise((resolve, reject) => {
            channel.consume(resQueue, msg => {
                if (msg.properties.correlationId === hash) resolve(JSON.parse(msg.content.toString()))
            }, { noAck: true }).catch(err => reject(err))
        })
        
        // await channel.close()
        // await connection.close()

    } catch (err) {
        debug(err)
        throw new Error(err);
    }
    
}

module.exports = { sendMessage, rabbitManager, publishMessageWithResponse }