import { useState } from "react";
import robert from "../assets/robert.webp";

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
      body: JSON.stringify({ question: input })
    });

    const data = await response.json();
    setMessages([...newMessages, { sender: "bot", text: data.answer }]);
  };

  return (
    <>
      <div className="robert" onClick={() => setIsChatVisible(true)}>
        <div className='buttonBox '>
          <h3>Hej, mit navn er Robert! Chat med din AI job assistent...</h3>
        </div>        
        <img
          src={robert}
          alt="Robert"
        />
      </div>

      <div className={`chat-container ${isChatVisible ? "visible" : "not-visible"}`}>
        <div className="chat-title">
          <img
            src={robert}
            alt="Robert"
            onClick={() => setIsChatVisible(true)}
            className="robert-in-chat"
          />
          <h2>Robert</h2>
          <button onClick={() => setIsChatVisible(false)} className="close-chat">
            ×
          </button>
        </div>
        <div className="chat-box">
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
        >
          <label htmlFor="chat-input" className="visually-hidden">
            Skriv dit spørgsmål
          </label>
          <input
            id="chat-input"
            name="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Skriv et spørgsmål..."
            className="chat-input"
            autoComplete="off"
          />
          <button type="submit" className="chat-send">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
