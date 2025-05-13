// import { OpenAI } from 'openai';
// import dotenv from 'dotenv';
// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function askChatGPT(question) {
//   // Tilføj instruktioner til prompten for at sikre, at svaret er på dansk og venligt
//   const prompt = `Svar venligst på dansk og vær høflig. Spørgsmålet er: ${question}`;

//   const chatCompletion = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     messages: [
//       { role: 'system', content: 'Du skal altid svare på dansk og være venlig.' },
//       { role: 'user', content: prompt }
//     ],
//   });

//   return chatCompletion.choices[0].message.content;
// }


import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Hent JSON-filer dynamisk
const __dirname = path.resolve(); // Hvis du bruger ES Modules
const jobDataPath = path.join(__dirname, 'backend', 'jobopslag.json');
const cimtDataPath = path.join(__dirname, 'backend', 'cimt.json');

const jobopslag = JSON.parse(fs.readFileSync(jobDataPath, 'utf8'));
const cimtInfo = JSON.parse(fs.readFileSync(cimtDataPath, 'utf8'));

export async function askChatGPT(question) {
  // Kontekst til prompten
  const jobText = jobopslag
    .map(job => `• ${job.titel}: ${job.beskrivelse}`)
    .join('\n');

  const cimtText = `
Om CIMT: ${cimtInfo.beskrivelse}
Fordele ved at arbejde hos CIMT: ${cimtInfo.fordele.join(', ')}
Udfordringer: ${cimtInfo.udfordringer.join(', ')}
`;

  const prompt = `
Du er en AI-assistent, som hjælper brugere med at finde relevante job hos CIMT.

Baggrundsviden:
${cimtText}

Ledige stillinger:
${jobText}

Brugerens spørgsmål: ${question}

Svar venligt, på dansk, og med et fokus på at matche behov med relevante job eller information om CIMT.
`;

  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Du skal altid svare på dansk og være venlig.' },
      { role: 'user', content: prompt }
    ]
  });

  return chatCompletion.choices[0].message.content;
}
