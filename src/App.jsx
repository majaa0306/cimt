import './App.css';
import img1 from './assets/img1.webp';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import header from './assets/header.webp';
import Chat from './Components/Chat';
import Header from './Components/Header';

import React from "react";

function App() {

  return (
    <>
      <Header />
      <img src={header} alt="" style={{ width: "100%" }} />
      <img src={img1} className='imgtop' alt="" style={{ width: "100%" }} />
      <div className='textBluebox'>
        <h1>CIMT som arbejdsplads</h1>
        <p>CIMT’s medarbejdere er dedikerede. Vi synes vores arbejdsopgaver er vigtige, fordi digitalisering handler om liv.</p>
      </div>
      <div className='boxFrame whitespace'>
        <div className='box'>
          <img src={img2} alt="" style={{ width: "100%" }} />
          <h3>CIMT og Kariere</h3>
          <h2>Boost din karriere hos os</h2>
          <p><span className='boldText'>I CIMT tilbyder vi meningsfulde karrieremuligheder.</span> Hos os får du mulighed for at arbejde med komplekse samfundsudfordringer og sundhedsteknologi, i et miljø hvor faglig udvikling, fleksibilitet og samarbejde er i centrum. </p>
          <p>Her bygger vi løsninger – <span className='boldText'>vi bygger fremtidens sundhedsteknologi.</span></p>
          <div className='line'></div>
        </div>
        <div className='box'>
          <img src={img3} alt="" style={{ width: "100%" }} />
          <h3>En unik arbejdsplads</h3>
          <h2>Vi skaber fremtiden</h2>
          <p><span className='boldText'> Et job hos os</span> er ikke bare et arbejde. Her er du ikke bare medarbejder – du er med til at forme noget større.</p>
          <p>– Det er en mulighed for reelt at gøre en forskel i samfundet og være <span className='boldText'>en del af løsningen på fremtidens sundhedsudfordringer.</span></p>
          <div className='line'></div>
        </div>
      </div>
      <h2 className='whitespace'>Find ud af hvor vi har brug for dig, med vores Chatbot <span className='blueText'>Robert</span>, der står klar til at hjælpe! </h2>
      <div className='whitespace marginTop7'>
        <h2>Hvad kan CIMT?</h2>
        <p>Se dine udviklingsmuligheder i CIMT – hvor karriere, læring og faglig vækst går hånd i hånd.</p>
        <div className='buttonBoxFrame'>
          <div className='buttonBox'>
            <h3>Hverdagen i CIMT</h3>
            <p className='miniText'>
              Mød vores medarbejdere
            </p>
          </div>
          <div className='buttonBox'>
            <h3>Værdier, medindflydelse og trivsel</h3>
            <p className='miniText'>
              CIMT’s værdier
            </p>
          </div>
          <div className='buttonBox'>
            <h3>Mange ambitioner - fælles lokationer</h3>
            <p className='miniText'>
              CIMT’s lokationer
            </p>
          </div>
        </div>
      </div>
      <h2 className='whitespace marginTop7'>Besøg os på LinkedIn</h2>
      <Chat />
      <footer>
        
      </footer>
    </>
  )
}

export default App