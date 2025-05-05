import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import askRoute from './routes/ask.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/ask', askRoute);

app.listen(PORT, () => {
  console.log(`✅ Server kører på http://localhost:${PORT}`);
});
