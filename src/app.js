const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
