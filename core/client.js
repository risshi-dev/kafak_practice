const {Kafka} = require('kafkajs')

exports.kafka = new Kafka({
    clientId: 'messaging-queue',
    brokers: ['192.168.1.15:9092']
})