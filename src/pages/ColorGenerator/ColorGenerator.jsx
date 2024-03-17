import React, { useState, useEffect } from 'react';
import './ColorGenerator.css';
import Draggable from 'react-draggable';

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

  // Function to handle color click and swap with a random color
  const handleColorClick = (index) => {
    const newSelectedColors = [...selectedColors];
  
    // Get the adjacent indices
    const adjacentIndices = [];
    if (index > 0) adjacentIndices.push(index - 1);
    if (index < selectedColors.length - 1) adjacentIndices.push(index + 1);
  
    // Randomly select one of the adjacent indices
    const randomAdjacentIndex = adjacentIndices[Math.floor(Math.random() * adjacentIndices.length)];
  
    // Swap colors
    const temp = newSelectedColors[index];
    newSelectedColors[index] = newSelectedColors[randomAdjacentIndex];
    newSelectedColors[randomAdjacentIndex] = temp;
  
    // Update state
    setSelectedColors(newSelectedColors);
  };

  useEffect(() => {
    // Scroll to the top when the page is rendered
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='color-generator-container'>
  
      <div className='color-section'>
        
        {selectedColors.map((color, index) => (
    
           <div key={index} className='color-generator' >
          
            <div className='color-preview' style={{ backgroundColor: `${color}` }} onClick={() => handleColorClick(index)}>
            <h1 className='color-title' >
              {color}
            </h1>
  <img src="iconchange.svg" alt="Image" className='change-svg' />
</div>
            <label className='color-label'>
            </label>
            <br />
            <label className='alpha-label'>
              Choose alpha (0 to 1):
              <input className='alpha-input' type="number" step="0.01" min="0" max="1" value={1} onChange={(event) => handleAlphaChange(event, index)} />
            </label>
            <br />
            <button className='copy-button' onClick={() => handleCopyToClipboard(index)}>
              Copy 
            </button>
            <p className='rgb-values'>{getRgbValues(color)}</p>
            <input className='color-input' type="color" value={color} onChange={(event) => handleColorChange(event, index)} />
          </div>

        ))}
      </div>
    </div>
  );
};

export default ColorGenerator;
