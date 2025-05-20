import './App.css';
import img1 from './assets/img1.webp';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import Chat from './Components/Chat';
import Header from './Components/Header';
import Breadcrumbs from './Components/Breadcrumbs';

import React from "react";

//function to handle keyboard activation for divs acting as buttons
function handleKeyActivate(e, onClick) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onClick();
  }
}

function App() {

  // Example click handlers for demonstration
  const handleHverdagClick = () => {
    alert("Læs om hverdagen i CIMT");
  };
  const handleVaerdierClick = () => {
    alert("Læs om værdier og trivsel");
  };
  const handleLokationerClick = () => {
    alert("Læs om CIMT's lokationer");
  };

  return (
    <>
      <Header />
      <Breadcrumbs />
      <img src={img1} className='imgtop' alt="Billede af to kvindelige medarbejdere der sidder i en sofa og kigger sammen på en laptop." style={{ width: "100%" }} />
      <div className='textBluebox'>
        <h1>CIMT som arbejdsplads</h1>
        <p>CIMT’s medarbejdere er dedikerede. Vi synes vores arbejdsopgaver er vigtige, fordi digitalisering handler om liv.</p>
      </div>
      <div className='boxFrame whitespace'>
        <div className='box'>
          <div className='content'>
            <img src={img2} alt="Billedet viser to kvindelige medarbejdere, den ene kvinde smiler og kigger på den anden kvinde, som er i gang med at fortælle noget. De står ved en computerskærm og en laptop." style={{ width: "100%" }} />
            <h3>CIMT og Kariere</h3>
            <h2>Boost din karriere hos os</h2>
            <p><span className='boldText'>I CIMT tilbyder vi meningsfulde karrieremuligheder.</span> Hos os får du mulighed for at arbejde med komplekse samfundsudfordringer og sundhedsteknologi, i et miljø hvor faglig udvikling, fleksibilitet og samarbejde er i centrum. </p>
            <p>Her bygger vi løsninger – <span className='boldText'>vi bygger fremtidens sundhedsteknologi.</span></p>
          </div>
          <div className='line'></div>
        </div>
        <div className='box'>
          <div className='content'>
            <img src={img3} alt="Billedet viser en kvinde, som holder nogle papirer mens hun er på vej ud af en mødeboks." style={{ width: "100%" }} />
            <h3>En unik arbejdsplads</h3>
            <h2>Vi skaber fremtiden</h2>
            <p><span className='boldText'> Et job hos os</span> er ikke bare et arbejde. Her er du ikke bare medarbejder – du er med til at forme noget større.</p>
            <p>– Det er en mulighed for reelt at gøre en forskel i samfundet og være <span className='boldText'>en del af løsningen på fremtidens sundhedsudfordringer.</span></p>
          </div>
          <div className='line'></div>
        </div>
      </div>
      <h2 className='whitespace'>Find ud af hvor vi har brug for dig, med vores Chatbot <span className='blueText'>Robert</span>, der står klar til at hjælpe! </h2>
      <div className='whitespace marginTop7'>
        <h2>Hvad kan CIMT?</h2>
        <p>Se dine udviklingsmuligheder i CIMT – hvor karriere, læring og faglig vækst går hånd i hånd.</p>
        <div className='buttonBoxFrame'>
          <div
            className='buttonBox'
            aria-label="Læs om hverdagen i CIMT"
            tabIndex={0}
            role="button"
            onClick={handleHverdagClick}
            onKeyDown={e => handleKeyActivate(e, handleHverdagClick)}
          >
            <h3>Hverdagen i CIMT</h3>
            <p className='miniText'>
              Mød vores medarbejdere
            </p>
          </div>
          <div
            className='buttonBox'
            aria-label="Læs om værdier og trivsel"
            tabIndex={0}
            role="button"
            onClick={handleVaerdierClick}
            onKeyDown={e => handleKeyActivate(e, handleVaerdierClick)}
          >
            <h3>Værdier, medindflydelse og trivsel</h3>
            <p className='miniText'>
              CIMT’s værdier
            </p>
          </div>
          <div
            className='buttonBox'
            aria-label="Læs om CIMT's lokationer"
            tabIndex={0}
            role="button"
            onClick={handleLokationerClick}
            onKeyDown={e => handleKeyActivate(e, handleLokationerClick)}
          >
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