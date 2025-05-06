import { useState } from "react";
import robert from "../assets/robert.png";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hej! Hvad vil du gerne vide om CIMT?" }
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


      <div className={`chat-container ${isChatVisible ? "visible" : ""}`}>
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
        <div className="chat-input-container">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Skriv et spørgsmål..."
            className="chat-input"
          />
          <button onClick={handleSend} className="chat-send">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
