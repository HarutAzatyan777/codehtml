// SelectedCategory.jsx
import React from 'react';

const SelectedCategory = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div>
      <h3>Category Selection</h3>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={category === selectedCategory ? 'selected' : ''}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedCategory;
