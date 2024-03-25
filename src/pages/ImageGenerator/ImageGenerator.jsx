import React, { useState, useRef } from 'react';
import './ImageGenerator.css'; // Make sure to create this file for styling
import ColorThief from 'colorthief'; // Import an image processing library for color extraction
import { ChromePicker } from 'react-color'; // Import the ChromePicker color picker from react-color

const ImageGenerator = () => {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default selected color
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
  const canvasRef = useRef(null); // Reference to the canvas element

  // Function to handle image upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      setError('');
      try {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl); // Set the selected image
        const palette = await extractColors(imageUrl);
        setColors(palette);
      } catch (error) {
        console.error('Error extracting colors:', error);
        setError('Error extracting colors. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Function to extract colors from the uploaded image
  const extractColors = async (imageUrl) => {
    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // Enable CORS for image extraction
    img.src = imageUrl;
    const palette = await new Promise((resolve, reject) => {
      img.onload = () => {
        try {
          const colors = colorThief.getPalette(img, 8); // Extract 8 dominant colors
          const palette = colors.map(rgb => `rgb(${rgb.join(', ')})`); // Convert RGB arrays to CSS RGB strings
          resolve(palette);
        } catch (error) {
          reject(error);
        }
      };
      img.onerror = (error) => {
        reject(error);
      };
    });
    return palette;
  };

  // Function to copy color to clipboard
  const copyColorToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard`);
  };

  // Function to handle color picker change
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  // Function to handle color box click
  const handleColorBoxClick = (color) => {
    setSelectedColor(color);
  };

  // Function to handle image click and get the color of the clicked pixel
  const handleImageClick = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    const pixelData = context.getImageData(x, y, 1, 1).data;
    const rgbaColor = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, ${pixelData[3] / 255})`;
    setSelectedColor(rgbaColor);
  };

  return (
    <div className="image-generator">
      <h2>Image Color Extractor</h2>
      <div className="file-upload-container">
        <label htmlFor="file-upload" className="custom-file-upload">
          Choose an image
        </label>
        <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      {selectedImage && (
        <div className="image-container">
          <img src={selectedImage} alt="Uploaded" className="uploaded-image" onClick={handleImageClick} />
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
      )}
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="color-picker-container">
        <ChromePicker color={selectedColor} onChange={handleColorChange} />
      </div>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div key={index} className="color-box" style={{ backgroundColor: color }} onClick={() => handleColorBoxClick(color)}>
            <span className="color-value">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGenerator;
