import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas'; // Import html2canvas library
import './ColorGenerator.css';

const ColorGenerator = () => {
  const [selectedColors, setSelectedColors] = useState([
    '#03045e', // Red
    '#023e8a', // Green
    '#0077b6', // Blue
    '#0096c7', // Yellow
    '#00b4d8', // Magenta
    '#caf0f8'  // Cyan
  ]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to update RGB values when the color changes
  const updateRgbValues = (index, newColor) => {
    const updatedColors = [...selectedColors];
    updatedColors[index] = newColor;
    setSelectedColors(updatedColors);
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

  // Function to handle screenshot button click
  const handleScreenshot = () => {
    // Take screenshot logic using html2canvas
    const colorSection = document.querySelector('.color-section');
    html2canvas(colorSection).then(canvas => {
      // Convert canvas to image and download it
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.download = 'color_palette.png';
      link.href = image;
      link.click();
    });
  };

  // Function to handle adding a new color
  const addColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generating a random hex color
    setSelectedColors([...selectedColors, randomColor]);
  };

  // Function to handle removing a color
  const removeColor = (index) => {
    const updatedColors = [...selectedColors];
    updatedColors.splice(index, 1);
    setSelectedColors(updatedColors);
  };

  useEffect(() => {
    // Randomize colors when the component mounts
    const randomColors = selectedColors.map(color => {
      return '#' + Math.floor(Math.random()*16777215).toString(16); // Generating a random hex color
    });
    setSelectedColors(randomColors);
  }, []); // Empty dependency array ensures this effect runs only once, during initialization

  return (
    <div className='color-generator-container'>
      <div className='color-section'>
        {selectedColors.map((color, index) => (
          <div 
            key={index} 
            className='color-generator' 
            onMouseEnter={() => setHoveredIndex(index)} 
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className='color-preview' style={{ backgroundColor: `${color}` }} onClick={() => handleColorClick(index)}>
              <h1 className='color-title'>{color}</h1>
              <img src="iconchange.svg" alt="Image" className='change-svg' />
            </div>
            {hoveredIndex === index && (
              <div className="color-menu">
                          <button className='remove-color-button' onClick={() => removeColor(index)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                </button>
                <button className='add-color-button' onClick={addColor}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
</button>
                <button className='copy-button' onClick={() => handleCopyToClipboard(index)}>
                  Copy
                </button>
      
                <input
                  className='color-input'
                  type="color"
                  value={selectedColors[index]}
                  onChange={(event) => updateRgbValues(index, event.target.value)}
                />
   
              </div>
            )}
          </div>
        ))}
      </div>
      <button className='screenshot-button' onClick={handleScreenshot}>
        Screenshot
      </button>
   
    </div>
  );
};

export default ColorGenerator;
