const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

// Замените YOUR_SUVVY_API_KEY на ваш реальный API ключ Suvvy.ai
const suvvyApiKey = 'cc-d08e2f0e7d024bac9a760c72eefac15740a7b1c8d952e5436ebf52aafbb1339e';

// Эндпоинт для перенаправления запросов к Suvvy.ai
app.post('/api/suvvy', async (req, res) => {
  try {
    const response = await fetch('https://api.cavvy.ai/v1/chat', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${suvvyApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
