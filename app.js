const express = require('express');
const app = express();
const dotenv = require('dotenv');
const clienteRoutes = require('./routes/clienteRoutes');

dotenv.config();

app.use(express.json());

app.use('/api/clientes', clienteRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
