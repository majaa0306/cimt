// ask.js er bindeleddet mellem vores React-chat og OpenAI, den sørger for at modtage spørgsmål fra brugeren, sende det videre til GPT, få svaret og returnere svaret til frontend

import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import askRoute from './routes/ask.js';

const app = express();
const PORT = 3001;

// Her aktiverer vi cors, så vi tillader, at vores frontend må sende forespørgsler til serveren.
app.use(cors());

//Her beder vi body-parser om at forstå og læse JSON-data, som bliver sendt fra frontend.
app.use(bodyParser.json());

//Når serveren får en forespørgsel, som starter med /ask, så skal den bruge det, der ligger i askRoute.
app.use('/ask', askRoute);

//Til sidst starter vi serveren. Den begynder at lytte på port 3001, og vi får en besked i terminalen, så vi ved, at den kører.
app.listen(PORT, () => {
  console.log(`✅ Server kører på http://localhost:${PORT}`);
});
