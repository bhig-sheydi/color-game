import { useState, useEffect } from "react";
import "../styles/ColorGame.css";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorGame = () => {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");
  const [statusClass, setStatusClass] = useState("");

  const generateColors = () => {
    let colorOptions = new Set();
    while (colorOptions.size < 6) {
      colorOptions.add(getRandomColor());
    }
    const colorArray = [...colorOptions];
    const newTargetColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    setColors(colorArray);
    setTargetColor(newTargetColor);
    setStatus(""); 
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore((prevScore) => prevScore + 1);
      setStatus("Correct! 🎉");
      setStatusClass("correct");
  
      setTimeout(() => {
        setStatus("");
        setStatusClass("");
        generateColors();
      }, 800);
    } else {
      setStatus("Wrong! ❌ Try Again.");
      setStatusClass("wrong");
      setTimeout(() => setStatusClass(""), 500);
    }
  };
  
  const fullReset = () => {
    setScore(0);
    setStatus("");
    generateColors();
  };

  return (
    <div className="color-game">
      <h2 data-testid="gameInstructions">Guess the correct color!</h2>
      
      <div
        data-testid="colorBox"
        className="color-box animate-color"
        style={{ backgroundColor: targetColor }}
      ></div>

      <div className="color-options">
        {colors.map((color, index) => (
          <button
            key={index}
            data-testid="colorOption"
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
          ></button>
        ))}
      </div>

      <p data-testid="gameStatus" className={`game-status ${statusClass}`}>
        {status}
      </p>
      <p data-testid="score" className="score animate-score">
        Score: {score}
      </p>

      <button data-testid="newGameButton" className="new-game-btn" onClick={fullReset}>
        New Game
      </button>
    </div>
  );
};

export default ColorGame;