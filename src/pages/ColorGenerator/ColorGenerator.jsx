import React, { useState } from 'react';
import './ColorGenerator.css';

const ColorGenerator = () => {
  const [selectedColor, setSelectedColor] = useState('#00ff00'); // Default color is green
  const [rgbValues, setRgbValues] = useState(getRgbValues(selectedColor));
  const [alphaValue, setAlphaValue] = useState(1);

  // Function to update RGB values when the color changes
  const updateRgbValues = () => {
    setRgbValues(getRgbValues(selectedColor));
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
  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    updateRgbValues();
  };

  // Function to handle alpha input change
  const handleAlphaChange = (event) => {
    const newAlpha = parseFloat(event.target.value);
    setAlphaValue(newAlpha);
  };

  // Function to handle copy button click
  const handleCopyToClipboard = () => {
    const colorInfo = `Color: ${selectedColor}, ${alphaValue}`;
    navigator.clipboard.writeText(colorInfo);
    alert('Color information copied to clipboard!');
  };

  return (
    <div className='color-generator'>
      <h1 className='color-title' style={{ color: selectedColor }}>
        {selectedColor}
      </h1>
      <div className='color-preview' style={{ backgroundColor: `${selectedColor}aa`, width: '200px', height: '200px' }}></div>
      <label className='color-label'>
        Choose a color:
        <input className='color-input' type="color" value={selectedColor} onChange={handleColorChange} />
      </label>
      <br />
      <label className='alpha-label'>
        Choose alpha (0 to 1):
        <input className='alpha-input' type="number" step="0.01" min="0" max="1" value={alphaValue} onChange={handleAlphaChange} />
      </label>
      <br />
      <p className='rgb-values'>{rgbValues}</p>
      <p className='rgba-values'>{`RGBA: ${rgbValues}, ${alphaValue}`}</p>
      <button className='copy-button' onClick={handleCopyToClipboard}>
        Copy Color Info
      </button>
    </div>
  );
};

export default ColorGenerator;
