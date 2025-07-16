import React, { useState } from "react";

const facts = [
  "No sleep = system crash",
  
"K-dramas reset my brain like Ctrl+Alt+Del",
  "ChatGPT: bestie, therapist, unpaid life coach",
  "Instagram owns my thumb",
  
  
];

const RandomFactButton = () => {
  const [show, setShow] = useState(false);
  const [fact, setFact] = useState("");

  const handleClick = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(randomFact);
    setShow(true);
    setTimeout(() => setShow(false), 4000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: "50px",        // Moved further down
          right: "40px",
          zIndex: 1000,
          border: "none",
          background: "transparent",
          borderRadius: "50%",
          width: "48px",         // Smaller width
          height: "48px",        // Smaller height
          fontSize: "1.4rem",    // Smaller bulb
          color: "#ffc107",
          boxShadow: "none",
          cursor: "pointer",
          padding: 0,
        }}
        aria-label="Show random fact"
        title="Show random fact"
      >
        💡
      </button>

      {/* Popup */}
      {show && (
        <div
          style={{
            position: "fixed",
            bottom: "70px", // slightly above the bulb
            right: "40px",
            zIndex: 1001,
            background: "#ffe4fa", // pastel pink
            color: "#7c3aed",     // soft purple text
            padding: "16px 24px",
            borderRadius: "16px",
            border: "2px solid #f3c4f7", // subtle border
            boxShadow: "0 4px 18px rgba(124, 58, 237, 0.10)",
            minWidth: "220px",
            //fontWeight: "bold",
            fontSize: "1rem",
            fontFamily: "Comic Sans MS, Comic Sans, cursive, sans-serif",
            transition: "opacity 0.3s"
          }}
        >
          {fact}
        </div>
      )}
    </>
  );
};

export default RandomFactButton;