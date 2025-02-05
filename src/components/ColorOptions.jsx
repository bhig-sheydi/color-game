const ColorOptions = ({ colors, handleGuess }) => {
    return (
      <div className="options-grid">
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-option"
            data-testid="colorOption"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
          />
        ))}
      </div>
    );
  };
  
  export default ColorOptions;
  