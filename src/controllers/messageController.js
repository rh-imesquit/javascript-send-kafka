const { producer } = require('../config/kafka');

const sendMessage = async (req, res) => {
  const message = req.body;

  try {
    console.log("Enviando mensagem para o tópico")
    console.log(message)

    await producer.send({
      topic: 'message-test-topic', // Substitua pelo seu tópico Kafka
      messages: [
        { value: JSON.stringify(message) }
      ],
    });

    res.status(200).send('Mensagem enviada para o Kafka com sucesso!');
  } catch (err) {
    console.error('Erro ao enviar mensagem para o Kafka', err);
    res.status(500).send('Erro ao enviar mensagem para o Kafka');
  }
};

module.exports = {
  sendMessage
};
