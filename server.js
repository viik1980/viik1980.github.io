const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Замените YOUR_CAVVY_API_KEY на ваш реальный API ключ Cavvy.ai
const cavvyApiKey = 'cc-d08e2f0e7d024bac9a760c72eefac15740a7b1c8d952e5436ebf52aafbb1339e';

app.post('/api/cavvy', async (req, res) => {
    try {
        // Отправляем запрос на API Cavvy.ai
        const response = await fetch("https://api.cavvy.ai/v1/chat", {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${cavvyApiKey}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    { role: 'user', content: req.body.message }
                ]
            })
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
