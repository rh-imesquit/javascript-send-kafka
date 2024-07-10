const express = require('express');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar as rotas definidas
app.use('/api', messageRoutes);

app.listen(port, () => {
  console.log(`Servidor HTTP rodando na porta ${port}`);
});

module.exports = app;
