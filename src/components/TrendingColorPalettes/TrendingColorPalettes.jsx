import React from 'react';
import './TrendingColorPalettes.css'; // Make sure to create this file for styling

const TrendingColorPalettes = ({ palettes }) => {
  return (
    <div className="trending-color-palettes">
      <h2>Trending Color Palettes</h2>
      <div className="palettes-container">
        {palettes.map((palette, index) => (
          <div key={index} className="palette">
            <h3>Palette {index + 1}</h3>
            <div className="colors">
              {palette.map((color, colorIndex) => (
                <div key={colorIndex} className="color" style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingColorPalettes;
