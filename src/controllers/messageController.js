const { producer } = require('../config/kafka');

const sendMessage = async (req, res) => {
  const message = req.body;

  try {
    await producer.send({
      topic: 'your-topic', // Substitua pelo seu tópico Kafka
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
