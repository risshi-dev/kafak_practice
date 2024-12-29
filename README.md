# KafkaJS Setup with Admin, Producer, and Consumer

This is the sample code to setup KafkaJS with admin, producer and consumer with one topic having two partitions, and CLI producer to store in Kafka, and consumer group to start.

## Prerequisites
- Docker
- Node.js

## Installation

We are using Zookeeper to manage Kafka broker, and Confluentic Kafka image. Install the above using:

# Start Zookeeper
docker run -p 2181:2181 zookeeper

# Start Kafka Broker
docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<SYSTEM_IP>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<SYSTEM_IP>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
