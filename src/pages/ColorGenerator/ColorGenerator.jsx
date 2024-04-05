import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './ColorGenerator.css';

const ColorGenerator = () => {
  const [selectedColors, setSelectedColors] = useState([
    '#03045e',
    '#023e8a',
    '#0077b6',
    '#0096c7',
    '#00b4d8',
    '#caf0f8'
  ]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change to whatever breakpoint you want for mobile
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const updateRgbValues = (index, newColor) => {
    const updatedColors = [...selectedColors];
    updatedColors[index] = newColor;
    setSelectedColors(updatedColors);
  };

  const handleCopyToClipboard = (index) => {
    const colorInfo = `${selectedColors[index]}`;
    navigator.clipboard.writeText(colorInfo);
  };

  const handleScreenshot = () => {
    const colorSection = document.querySelector('.color-section');
    html2canvas(colorSection).then(canvas => {
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.download = 'color_palette.png';
      link.href = image;
      link.click();
    });
  };

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const addColor = () => {
    const randomColor = generateRandomColor();
    setSelectedColors([...selectedColors, randomColor]);
  };

  const removeColor = (index) => {
    const updatedColors = [...selectedColors];
    updatedColors.splice(index, 1);
    setSelectedColors(updatedColors);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newColors = [...selectedColors];
    const [reorderedItem] = newColors.splice(result.source.index, 1);
    newColors.splice(result.destination.index, 0, reorderedItem);

    setSelectedColors(newColors);
  };

  return (
    <div className='color-generator-container'>
      <DragDropContext onDragEnd={onDragEnd}>
        {isMobile ? (
          <Droppable droppableId="color-section" direction="vertical">
            {(provided) => (
              <div
                className='color-section'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {selectedColors.map((color, index) => (
                  <Draggable key={index} draggableId={`color-${index}`} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className='color-generator'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className='color-preview' style={{ backgroundColor: color }}>
                          <h1 className='color-title'>{color}</h1>
                          {hoveredIndex === index && (
                            <div className="color-menu">
                              <button className='remove-color-button' onClick={() => removeColor(index)}>
                                Remove
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
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ) : (
          <Droppable droppableId="color-section" direction="horizontal">
            {(provided) => (
              <div
                className='color-section'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {selectedColors.map((color, index) => (
                  <Draggable key={index} draggableId={`color-${index}`} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className='color-generator'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className='color-preview' style={{ backgroundColor: color }}>
                          <h1 className='color-title'>{color}</h1>
                          {hoveredIndex === index && (
                            <div className="color-menu">
                              <button className='remove-color-button' onClick={() => removeColor(index)}>
                                Remove
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
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )}
      </DragDropContext>
      <button className='screenshot-button' onClick={handleScreenshot}>
        Screenshot
      </button>
      <button className='add-color-button' onClick={addColor}>
        Add Color
      </button>
    </div>
  );
};

export default ColorGenerator;
