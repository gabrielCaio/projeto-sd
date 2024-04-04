

module.exports = {

    async handleEmitBoleto(message) {
        // Handle messages with routing key 'B'
        console.log(`Received message with routing key 'emiteBoleto': ${message.content.toString()}`);
    
        setTimeout(() => {
            const response = `Response to: ${message.content.toString()}`;
            console.log(`Sending response: ${response}`);
    
            // Reply to the message using the correlation ID
            channel.sendToQueue(message.properties.replyTo, Buffer.from(response), { correlationId: message.properties.correlationId });
            channel.ack(message);
        }, 2000);
    }

}