import React, { useState, useEffect } from 'react';

const TypingGame = () => {
  const [input, setInput] = useState('');
  const [mistakes, setMistakes] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const targetText = "The quick brown fox jumps over the lazy dog";

  useEffect(() => {
    calculateAccuracyAndMistakes();
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const calculateAccuracyAndMistakes = () => {
    let mistakesCount = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== targetText[i]) {
        mistakesCount++;
      }
    }
    setMistakes(mistakesCount);
    const accuracyPercentage = ((input.length - mistakesCount) / input.length) * 100;
    setAccuracy(accuracyPercentage);
  };

  return (
    <div className="typing-game">
      <h2>Typing Game</h2>
      <p>Type the following text:</p>
      <p className="target-text">{targetText}</p>
      <textarea
        value={input}
        onChange={handleInputChange}
        rows="5"
        cols="50"
        placeholder="Start typing here..."
      ></textarea>
      <div className="stats">
        <p>Mistakes: {mistakes}</p>
        <p>Accuracy: {accuracy.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default TypingGame;