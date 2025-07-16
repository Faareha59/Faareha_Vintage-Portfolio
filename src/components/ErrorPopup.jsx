import React from "react";

const ErrorPopup = ({ message, onClose }) => (
  <div style={{
    position: "fixed",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2000,
    background: "#ececec",
    border: "2px solid #000",
    borderRadius: "6px",
    width: "320px",
    boxShadow: "4px 4px 0 #888",
    fontFamily: "Tahoma, Geneva, sans-serif"
  }}>
    <div style={{
      background: "#0a246a",
      color: "#fff",
      padding: "8px",
      fontWeight: "bold",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px"
    }}>
      Error
    </div>
    <div style={{ padding: "24px 16px 16px 16px", color: "#222" }}>
      <img src="/icons/error.png" alt="error" style={{ width: 32, verticalAlign: "middle", marginRight: 12 }} />
      {message}
    </div>
    <div style={{ textAlign: "right", padding: "8px 16px" }}>
      <button onClick={onClose} style={{
        background: "#ececec",
        border: "1px solid #888",
        borderRadius: "3px",
        padding: "4px 16px",
        fontWeight: "bold",
        cursor: "pointer"
      }}>OK</button>
    </div>
  </div>
);

export default ErrorPopup;