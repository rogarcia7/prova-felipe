const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/usuario', (req, res) => {
  res.json({ usuario: 'rogarcia7' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
