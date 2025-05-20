import { useState } from "react";
import robert from "../assets/robert.webp";

// function for keyboard navigation and activation
function handleKeyActivate(e, onClick) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onClick();
  }
}

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hej! Kan jeg hjælpe dig med at finde det helt rigtige job? Skriv hvad dine kompetencer er nedenfor." }
  ]);
  const [input, setInput] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    const response = await fetch("http://localhost:3001/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();
    setMessages([...newMessages, { sender: "bot", text: data.answer }]);
  };

  return (
    <>
      <div
        className="robert"
        aria-label="Åbn chatvindue"
        role="button"
        tabIndex={0}
        onClick={() => setIsChatVisible(true)}
        onKeyDown={e => handleKeyActivate(e, () => setIsChatVisible(true))}
      >
        <div className='buttonBox '>
          <h3>Hej, mit navn er Robert! Chat med din AI job assistent...</h3>
        </div>
        <img
          src={robert}
          alt="En illustration af Robert, en AI-genereret rekrutterings chatbot."
        />
      </div>

      <div
        className={`chat-container ${isChatVisible ? "visible" : "not-visible"}`}
        aria-label="Chatvindue med Robert, AI job assistent"
        role="dialog"
        aria-modal="true"
      >
        <div className="chat-title">
          <img
            src={robert}
            alt="En illustration af Robert, en AI-genereret rekrutterings chatbot."
            onClick={() => setIsChatVisible(true)}
            className="robert-in-chat"
          />
          <h2>Robert</h2>
          <button
            onClick={() => setIsChatVisible(false)}
            className="close-chat"
            aria-label="Luk chatvindue"
          >
            ×
          </button>
        </div>
        <div className="chat-box" aria-live="polite" aria-label="Chatbeskeder">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.sender}`}>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <form
          className="chat-input-container"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          aria-label="Send besked til Robert"
        >
          <label htmlFor="chat-input" className="visually-hidden">
            Skriv din besked til Robert
          </label>
          <input
            type="text"
            id="chat-input"
            name="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Skriv et spørgsmål..."
            className="chat-input"
            autoComplete="off"
            aria-label="Skriv din besked til Robert"
          />
          <button
            type="submit"
            className="chat-send"
            aria-label="Send besked"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
