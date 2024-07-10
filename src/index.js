require('dotenv').config();

const { connectProducer } = require('./config/kafka');
const app = require('./server');

const run = async () => {
  await connectProducer();
};

run().catch(console.error);
