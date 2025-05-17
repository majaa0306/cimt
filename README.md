
# CIMT - CHATBOT

En intelligent chatbot til CIMT, der besvarer spørgsmål om virksomheden og hjælper brugere med at finde ledige stillinger, der passer til deres profil.


## Features

- **Svar på spørgsmål om CIMT**  
  Chatbotten kan besvare brugernes spørgsmål om CIMT som virksomhed, herunder information om virksomhedens værdier, kultur og services.

- **Jobmatching**  
  Finder og anbefaler ledige stillinger, der passer til brugerens profil og interesser.

- **Dynamisk og intelligent**  
  Bruger OpenAI’s GPT-model til at give naturlige og relevante svar baseret på brugerens input.

- **Skalerbar**  
  Kan udvides med flere funktioner, såsom at håndtere flere sprog eller flere typer forespørgsler.



## Installation

1. Klon projektet via terminalen:

```bash
git clone https://github.com/majaa0306/cimt.git
cd cimt/backend
```

2. Installer afhængigheder (fra package.json):

```bash
npm install
```
3. Opret en .env-fil i backend-mappen med følgende indhold:

```env
OPENAI_API_KEY=indsæt din nøgle her
PORT=3001

```

4. Start serveren:
```bash
npm run dev
```

5. Åben browseren og test om det virker på:
http://localhost:3001

    
## Krav

- **Node.js** version 14 eller nyere  
- **npm** (Node Package Manager)  
- En gyldig **OpenAI API-nøgle**  
- Internetforbindelse til at kommunikere med OpenAI's API  
- (Valgfrit) En browser til at teste chatbotten på `http://localhost:3001`  

## Udviklere

Victoria Stephanie Sørensen Vevest og Maja Thorsøe Andersen