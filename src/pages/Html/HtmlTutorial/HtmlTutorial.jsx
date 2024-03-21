import React from 'react';
import './HtmlTutorial.css'; // Importing the CSS file

function HtmlTutorial() {
  return (

    
    <div className="tutorial-container"> 
      <h1>HTML Tutorial</h1>
      <p>HTML stands for HyperText Markup Language and it's the standard language used to create web pages.</p>

      <h2>1. HTML Document Structure:</h2>
      <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title of the Document</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>`}</pre>

      <h2>2. Basic Tags:</h2>
      <p>Basic HTML tags include:</p>
      <ul>
        <li>&lt;html&gt;</li>
        <li>&lt;head&gt;</li>
        <li>&lt;title&gt;</li>
        <li>&lt;body&gt;</li>
        <li>&lt;h1&gt; - &lt;h6&gt;</li>
        <li>&lt;p&gt;</li>
        <li>&lt;br&gt;</li>
        <li>&lt;hr&gt;</li>
      </ul>

      <h2>3. Formatting Tags:</h2>
      <p>Formatting tags include:</p>
      <ul>
        <li>&lt;strong&gt; or &lt;b&gt;</li>
        <li>&lt;em&gt; or &lt;i&gt;</li>
        <li>&lt;u&gt;</li>
        <li>&lt;mark&gt;</li>
        <li>&lt;sup&gt;</li>
        <li>&lt;sub&gt;</li>
      </ul>

      <h2>4. Links and Images:</h2>
      <p>Link and image tags include:</p>
      <ul>
        <li>&lt;a href="URL"&gt;</li>
        <li>&lt;img src="image.jpg" alt="Description"&gt;</li>
      </ul>

      {/* More sections can be added similarly */}

      <h2>8. Comments:</h2>
      <p>HTML comments are written like this:</p>
      <pre>{`<!-- This is a comment -->`}</pre>
    </div>
  );
}

export default HtmlTutorial;
