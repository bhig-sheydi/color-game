import "../styles/ColorGame.css";

const ColorBox = ({ color }) => {
  return <div className="color-box" data-testid="colorBox" style={{ backgroundColor: color }}></div>;
};

export default ColorBox;
