import React, { useState } from "react";

const savedAnswers = {
  "What are Faareha's skills?": "Faareha is skilled in MERN Stack, Mobile App Development, Python, Linux, JavaScript, Java, HTML, and CSS.",
  "Tell me about Faareha's education.": "Faareha is a 7th semester Computer Science student at Riphah International University.",
  "What experience does Faareha have?": "Faareha has experience in web and mobile app development, AI projects, and more.",
  "Show me Faareha's projects.": "You can view Faareha's projects in the Projects section of this portfolio.",
};

// Call OpenAI via Vercel AI SDK demo endpoint (for demo only)
async function getAIResponse(message) {
  if (savedAnswers[message]) {
    return savedAnswers[message];
  }
  const response = await fetch("http://localhost:3000/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  const data = await response.json();
  return data.reply || "Sorry, I couldn't get a response.";
}

const suggestedQuestions = [
  "What are Faareha's skills?",
  "Tell me about Faareha's education.",
  "What experience does Faareha have?",
  "Show me Faareha's projects."
];

const ClippyChatBot = () => {
  const [visible, setVisible] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [messages, setMessages] = useState([
    { from: "clippy", text: "Hi, I’m Clippy! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  if (!visible) return null;

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    const aiReply = await getAIResponse(input);
    setMessages((msgs) => [...msgs, { from: "clippy", text: aiReply }]);
    setLoading(false);
  };

  // Show suggestions if the last message is from Clippy, input is empty, and not loading
  const showSuggestions =
    messages.length > 0 &&
    messages[messages.length - 1].from === "clippy" &&
    !input &&
    !loading;

  const handleSuggestionClick = async (question) => {
    setInput(""); // Clear input
    const userMsg = { from: "user", text: question };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    const aiReply = await getAIResponse(question);
    setMessages((msgs) => [...msgs, { from: "clippy", text: aiReply }]);
    setLoading(false);
  };

  return (
    <div style={{
      position: "fixed",
      bottom: 140, // Moved Clippy up
      right: 32,
      zIndex: 3000,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    }}>
      {showHelp && (
        <div style={{
          background: "#fffbe7",
          border: "1.5px solid #888",
          borderRadius: 8,
          padding: "14px 18px",
          marginBottom: 8,
          fontFamily: "Tahoma, Geneva, sans-serif",
          boxShadow: "2px 2px 8px rgba(0,0,0,0.15)",
          maxWidth: 260
        }}>
          <div style={{ maxHeight: 180, overflowY: "auto", marginBottom: 8 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                textAlign: msg.from === "clippy" ? "left" : "right",
                margin: "6px 0"
              }}>
                <b>{msg.from === "clippy" ? "Clippy" : "You"}:</b> {msg.text}
              </div>
            ))}
            {loading && <div>Clippy is typing...</div>}
          </div>
          {showSuggestions && (
            <div style={{ marginBottom: 10 }}>
              <div style={{ marginBottom: 6, fontSize: 13, color: "#444" }}>Try asking:</div>
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(q)}
                  style={{
                    display: "block",
                    width: "100%",
                    margin: "3px 0",
                    background: "#e6f2ff",
                    border: "1px solid #b3d1ff",
                    borderRadius: 4,
                    padding: "4px 8px",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: 13
                  }}
                  disabled={loading}
                >
                  {q}
                </button>
              ))}
            </div>
          )}
          <div style={{ marginTop: 10, textAlign: "right" }}>
            <button
              onClick={() => setShowHelp(false)}
              style={{
                fontSize: 12,
                background: "#ececec",
                border: "1px solid #bbb",
                borderRadius: 4,
                padding: "2px 10px",
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <img
        src="/icons/1zfr.gif" // <-- use your GIF here
        alt="Clippy"
        style={{ width: 60, cursor: "pointer", background: "transparent" }}
        onClick={() => setShowHelp((v) => !v)}
        title="Need help?"
      />
      
    </div>
     );
};

export default ClippyChatBot;