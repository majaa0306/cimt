import express from 'express'; 
import { askChatGPT } from '../openai.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'No question provided' });
  }

  const answer = await askChatGPT(question);
  res.json({ answer });
});

export default router;
