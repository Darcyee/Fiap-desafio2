const express = require('express');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Tech Challenge rodando 🚀');
});

app.use(postRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

