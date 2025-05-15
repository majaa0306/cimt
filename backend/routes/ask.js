import express from 'express'; 
import { askChatGPT } from '../openai.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'No question provided' });
  }

  try {
    const answer = await askChatGPT(question);
    res.json({ answer });
  } catch (error) {
    console.error('🔴 Fejl i askChatGPT:', error.message);
    res.status(500).json({ error: 'Noget gik galt med ChatGPT-forbindelsen' });
  }
});

export default router;
