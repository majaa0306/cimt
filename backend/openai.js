import { OpenAI } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function askChatGPT(question) {
  // Tilføj instruktioner til prompten for at sikre, at svaret er på dansk og venligt
  const prompt = `Svar venligst på dansk og vær høflig. Spørgsmålet er: ${question}`;

  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Du skal altid svare på dansk og være venlig.' },
      { role: 'user', content: prompt }
    ],
  });

  return chatCompletion.choices[0].message.content;
}
