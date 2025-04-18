const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Поддержка CORS
app.use(cors());

// Парсер JSON
app.use(bodyParser.json());

// Обслуживание статических файлов из папки public
app.use(express.static(__dirname + '/public'));

// Эндпоинт для вебхука
app.post('/api/suvvy', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).json({ message: 'Webhook received' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
