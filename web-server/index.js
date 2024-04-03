const consumeMessages = require('./src/services/rabbitmq')

const app_name = 'web-server'
const port = 3001

console.log(`${app_name} listening on port ${port}...`)

consumeMessages().catch(err => console.error(err))

// rabbitManager.getChannel().then(channel => {
//     channel.consume('user_data', async msg => {
//         try {

//             console.log(msg)

//             const response = { status: 'success', message: 'User data saved successfully' }
//             await channel.assertQueue(msg.properties.replyTo)
//             channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
//                 correlationId: msg.properties.correlationId,
//             })

//         } catch (e) {
//             console.error(e)
//         } finally {
//             channel.ack(msg)
//         }
//     })
// })
