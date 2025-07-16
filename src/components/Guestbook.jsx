import React, { useState } from "react";

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      setEntries([{ name, message, date: new Date().toLocaleString() }, ...entries]);
      setName("");
      setMessage("");
    }
  };

  return (
    <div style={{ padding: 16, minWidth: 320 }}>
      <h2 style={{ fontWeight: "bold", marginBottom: 12 }}>Guestbook</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ marginRight: 8, padding: 4 }}
          required
        />
        <input
          type="text"
          placeholder="Your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          style={{ marginRight: 8, padding: 4, width: 160 }}
          required
        />
        <button type="submit" style={{ padding: "4px 12px" }}>Sign</button>
      </form>
      <div style={{ maxHeight: 180, overflowY: "auto" }}>
        {entries.length === 0 && <div>No entries yet. Be the first!</div>}
        {entries.map((entry, idx) => (
          <div key={idx} style={{ marginBottom: 10, borderBottom: "1px solid #ccc", paddingBottom: 6 }}>
            <strong>{entry.name}</strong> <span style={{ color: "#888", fontSize: "0.85em" }}>{entry.date}</span>
            <div>{entry.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;