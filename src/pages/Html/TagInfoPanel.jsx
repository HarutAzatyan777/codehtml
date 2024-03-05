// TagInfoPanel.jsx

import React from 'react';
import './TagInfoPanel.css'; // Import the CSS file

const TagInfoPanel = ({ selectedTag }) => {
  const getTagInfo = (tag) => {
    switch (tag) {
      case '<!-->':
        return <p>This is a comment. Comments are not displayed in the browser.</p>;
      case '<!DOCTYPE>':
        return <p>This declaration defines the document type and version of HTML.</p>;
      case '<a>':
        return <p>This is an anchor tag used to create hyperlinks.</p>;
      case '<abbr>':
        return <p>This is an abbreviation or acronym, typically styled differently.</p>;
      case '<acronym>':
        return <p>This tag is obsolete. Use  instead.</p>;
      case '<address>':
        return <p>This tag defines contact information for the author/owner of a document or an article.</p>;
      // Add information for other tags
      case '<article>':
        return <p>This tag represents a self-contained piece of content that could be distributed and reused independently.</p>;
      case '<aside>':
        return <p>This tag represents content that is tangentially related to the content around it.</p>;
      // ... (add other cases for remaining tags)
      default:
        return <p>No additional information available for {tag}.</p>;
    }
  };

  return (
    <div className="tag-info-panel">
      <h3>{selectedTag}</h3>
      {getTagInfo(selectedTag)}
    </div>
  );
};

export default TagInfoPanel;
