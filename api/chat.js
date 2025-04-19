export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Missing message in request body' });
  }

  // Здесь ты можешь подключить Cavvy.ai или логику своего бота
  // Пока просто эхо-ответ
  const botReply = `🤖 savvy слышит вас! Вы написали: "${message}"`;

  return res.status(200).json({ message: botReply });
}
