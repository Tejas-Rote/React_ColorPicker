import { useState } from "react";
import "./colorPicker.css";
const ColorPicker = (props) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState("white");

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="container">
      <h1>Color Picker</h1>
      <div
        className="picker"
        style={{
          backgroundColor: selectedColor,
        }}
      >
        {showColorList && (
          <ul>
            {props.colors.map((color, index) => (
              <li key={index} onClick={() => handleColorClick(color)}>
                <div
                  className="blocks"
                  style={{
                    backgroundColor: color,
                    width: "40px",
                    height: "40px",
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={() => setShowColorList(!showColorList)}>
        Pick a color
      </button>
    </div>
  );
};

export default ColorPicker;
