const express = require('express');
const app = express();

// Обработчик для Webhook
app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).send('OK');
});

// Старт сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
