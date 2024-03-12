import React, { useState, useEffect } from 'react';
import './ColorGenerator.css';

const ColorGenerator = () => {
  const [selectedColors, setSelectedColors] = useState([
    '#ff0000', // Red
    '#00ff00', // Green
    '#0000ff', // Blue
    '#ffff00', // Yellow
    '#ff00ff', // Magenta
    '#00ffff'  // Cyan
  ]);
  const [randomColorIndex, setRandomColorIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * selectedColors.length);
    setRandomColorIndex(randomIndex);
  }, []); // Empty dependency array ensures this effect runs only once, during initialization

  // Function to update RGB values when the color changes
  const updateRgbValues = (index, newColor) => {
    const updatedColors = [...selectedColors];
    updatedColors[index] = newColor;
    setSelectedColors(updatedColors);
  };

  // Function to get RGB values from a hex color
  function getRgbValues(hexColor) {
    const hex = hexColor.substring(1); // Remove the hash
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `RGB: ${r}, ${g}, ${b}`;
  }

  // Function to handle color input change
  const handleColorChange = (event, index) => {
    const newColor = event.target.value;
    updateRgbValues(index, newColor);
  };

  // Function to handle alpha input change
  const handleAlphaChange = (event, index) => {
    const newAlpha = parseFloat(event.target.value);
    // Handle alpha value change here if needed
  };

  // Function to handle copy button click
  const handleCopyToClipboard = (index) => {
    const colorInfo = ` ${selectedColors[index]}`;
    navigator.clipboard.writeText(colorInfo);
    
  };

  useEffect(() => {
    // Scroll to the top when the page is rendered
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='color-generator-container'>
      {selectedColors.map((color, index) => (
        <div key={index} className='color-generator'>
          <h1 className='color-title' style={{ color: color }}>
            {color}
          </h1>
          <div className='color-preview' style={{ backgroundColor: `${color}` }}>
            
          </div>
          <label className='color-label'>
           
            <input className='color-input' type="color" value={color} onChange={(event) => handleColorChange(event, index)} />
          </label>
          <br />
          <label className='alpha-label'>
            Choose alpha (0 to 1):
            <input className='alpha-input' type="number" step="0.01" min="0" max="1" value={1} onChange={(event) => handleAlphaChange(event, index)} />
          </label>
          <br />
          <button className='copy-button'  onClick={() => handleCopyToClipboard(index)}>
          Copy Color Info
          </button>
          <p className='rgb-values'>{getRgbValues(color)}</p>

        </div>
      ))}
     
     
    </div>
  );
};

export default ColorGenerator;
