require('dotenv').config();

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'app-producer',
  brokers: [process.env.KAFKA_BROKER]
});

const producer = kafka.producer();

const connectProducer = async () => {
  try {
    await producer.connect();

    console.log('Conectado ao Kafka com sucesso!');
  } catch (err) {
    console.error(err.message);
    throw new Error('Não foi possível conectar ao Kafka. Verifique a configuração e tente novamente.');
  }
};

module.exports = {
  producer,
  connectProducer
};