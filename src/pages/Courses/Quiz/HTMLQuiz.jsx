import React, { useState, useEffect } from 'react';
import './HTMLQuiz.css'; // Import the CSS file

const HTMLQuiz = () => {
  // Define the list of questions with their correct answers
  const initialQuestions = [

        {
          question: 'Which tag is used to create a hyperlink?',
          options: ['<a>', '<link>', '<href>', '<url>'],
          answer: '<a>'
        },
        {
          question: 'Which tag defines the document type in HTML5?',
          options: ['<!DOCTYPE>', '<html>', '<doctype>', '<head>'],
          answer: '<!DOCTYPE>'
        },
        {
          question: 'Which tag is used to define a table row?',
          options: ['<tr>', '<td>', '<th>', '<table>'],
          answer: '<tr>'
        },
        {
          question: 'Which tag is used to define a list item in an unordered list?',
          options: ['<ul>', '<li>', '<ol>', '<dl>'],
          answer: '<li>'
        },
        {
          question: 'Which tag is used to add a line break in HTML?',
          options: ['<br>', '<hr>', '<lb>', '<ln>'],
          answer: '<br>'
        },
        {
          question: 'Which tag is used to define a hyperlink in an HTML document?',
          options: ['<link>', '<href>', '<a>', '<src>'],
          answer: '<a>'
        },
        {
          question: 'Which tag is used to define a footer in HTML?',
          options: ['<foot>', '<footer>', '<end>', '<bottom>'],
          answer: '<footer>'
        },
        {
          question: 'Which tag is used to define the header for a section or page in HTML?',
          options: ['<header>', '<head>', '<top>', '<title>'],
          answer: '<header>'
        },
        {
          question: 'Which tag is used to define a section in HTML?',
          options: ['<sect>', '<div>', '<section>', '<area>'],
          answer: '<section>'
        },
        {
          question: 'Which tag is used to embed multimedia content in HTML?',
          options: ['<video>', '<media>', '<multimedia>', '<embed>'],
          answer: '<video>'
        },
        // Add more questions as needed
        {
          question: 'Which tag is used to create an image in HTML?',
          options: ['<img>', '<picture>', '<image>', '<src>'],
          answer: '<img>'
        },
        {
          question: 'Which tag is used to create a button in HTML?',
          options: ['<button>', '<input>', '<form>', '<submit>'],
          answer: '<button>'
        },
        {
          question: 'Which tag is used to create an unordered list in HTML?',
          options: ['<ol>', '<li>', '<ul>', '<dl>'],
          answer: '<ul>'
        },
        {
          question: 'Which tag is used to create a paragraph in HTML?',
          options: ['<p>', '<paragraph>', '<div>', '<span>'],
          answer: '<p>'
        },
        {
          question: 'Which tag is used to define a division or section in HTML?',
          options: ['<div>', '<section>', '<span>', '<p>'],
          answer: '<div>'
        },
        {
          question: 'Which tag is used to create a heading in HTML?',
          options: ['<h1>', '<heading>', '<head>', '<title>'],
          answer: '<h1>'
        },
        {
          question: 'Which tag is used to define metadata in an HTML document?',
          options: ['<meta>', '<head>', '<link>', '<title>'],
          answer: '<meta>'
        },
        {
          question: 'Which tag is used to create an ordered list in HTML?',
          options: ['<ol>', '<ul>', '<li>', '<list>'],
          answer: '<ol>'
        },
        {
          question: 'Which tag is used to create a line break in HTML?',
          options: ['<br>', '<lb>', '<line-break>', '<break>'],
          answer: '<br>'
        },
        {
          question: 'Which tag is used to define a hyperlink in an HTML document?',
          options: ['<a>', '<href>', '<link>', '<src>'],
          answer: '<a>'
        },
        {
          question: 'Which tag is used to define a form in HTML?',
          options: ['<form>', '<input>', '<button>', '<submit>'],
          answer: '<form>'
        },
        {
          question: 'Which tag is used to create a dropdown list in HTML?',
          options: ['<select>', '<dropdown>', '<list>', '<options>'],
          answer: '<select>'
        },
        {
          question: 'Which tag is used to create a checkbox in HTML?',
          options: ['<input>', '<checkbox>', '<check>', '<select>'],
          answer: '<input>'
        },
        {
          question: 'Which tag is used to create a radio button in HTML?',
          options: ['<input>', '<radio>', '<check>', '<button>'],
          answer: '<input>'
        },
        {
          question: 'Which tag is used to create a submit button in HTML?',
          options: ['<button>', '<submit>', '<input>', '<form>'],
          answer: '<input>'
        },
        {
          question: 'Which tag is used to create a text input field in HTML?',
          options: ['<input>', '<text>', '<textfield>', '<textarea>'],
          answer: '<input>'
        },
        {
          question: 'Which tag is used to define a table in HTML?',
          options: ['<table>', '<tr>', '<td>', '<th>'],
          answer: '<table>'
        },
        {
          question: 'Which tag is used to create a table heading in HTML?',
          options: ['<th>', '<thead>', '<head>', '<heading>'],
          answer: '<th>'
        },
        {
          question: 'Which tag is used to create a table row in HTML?',
          options: ['<tr>', '<row>', '<td>', '<th>'],
          answer: '<tr>'
        },
        {
          question: 'Which tag is used to create a table data/cell in HTML?',
          options: ['<td>', '<cell>', '<data>', '<tr>'],
          answer: '<td>'
        },
        {
          question: 'Which tag is used to create a hyperlink that opens in a new window in HTML?',
          options: ['<a target="_blank">', '<a href="#">', '<a new>', '<a href="_new">'],
          answer: '<a target="_blank">'
        },
        {
          question: 'Which tag is used to create a horizontal rule in HTML?',
          options: ['<hr>', '<rule>', '<line>', '<hl>'],
          answer: '<hr>'
        },
        {
          question: 'Which tag is used to create an image map in HTML?',
          options: ['<map>', '<area>', '<img>', '<image>'],
          answer: '<map>'
        },
        {
          question: 'Which tag is used to create a line break in HTML?',
          options: ['<br>', '<lb>', '<line>', '<hr>'],
          answer: '<br>'
        },
        {
          question: 'Which tag is used to create a definition list in HTML?',
          options: ['<dl>', '<ul>', '<ol>', '<li>'],
          answer: '<dl>'
        },
        {
          question: 'Which tag is used to define a definition term in HTML?',
          options: ['<dt>', '<dd>', '<dl>', '<dfn>'],
          answer: '<dt>'
        },
        {
          question: 'Which tag is used to define a definition description in HTML?',
          options: ['<dd>', '<dt>', '<dl>', '<def>'],
          answer: '<dd>'
        },
        {
          question: 'Which tag is used to create an ordered list in HTML?',
          options: ['<ol>', '<ul>', '<li>', '<list>'],
          answer: '<ol>'
        },
        {
          question: 'Which tag is used to create an unordered list in HTML?',
          options: ['<ul>', '<ol>', '<li>', '<list>'],
          answer: '<ul>'
        },
        {
          question: 'Which tag is used to create a subscript in HTML?',
          options: ['<sub>', '<sup>', '<subscript>', '<subtext>'],
          answer: '<sub>'
        },
        {
          question: 'Which tag is used to create a superscript in HTML?',
          options: ['<sup>', '<sub>', '<superscript>', '<suptext>'],
          answer: '<sup>'
        },
        {
          question: 'Which tag is used to define an abbreviation or acronym in HTML?',
          options: ['<abbr>', '<acronym>', '<abbrv>', '<acro>'],
          answer: '<abbr>'
        },
        {
          question: 'Which tag is used to create an abbreviation or acronym in HTML?',
          options: ['<abbr>', '<acronym>', '<abbrv>', '<acro>'],
          answer: '<abbr>'
        },
        {
          question: 'Which tag is used to define emphasized text in HTML?',
          options: ['<em>', '<i>', '<italic>', '<strong>'],
          answer: '<em>'
        },
        {
          question: 'Which tag is used to define a bold text in HTML?',
          options: ['<b>', '<bold>', '<strong>', '<i>'],
          answer: '<b>'
        },
        {
          question: 'Which tag is used to define a strong importance in HTML?',
          options: ['<strong>', '<b>', '<em>', '<important>'],
          answer: '<strong>'
        },
        {
          question: 'Which tag is used to define a deleted text in HTML?',
          options: ['<del>', '<strike>', '<s>', '<delete>'],
          answer: '<del>'
        },
        {
          question: 'Which tag is used to define a strikethrough text in HTML?',
          options: ['<strike>', '<s>', '<del>', '<deleted>'],
          answer: '<strike>'
        },
        {
          question: 'Which tag is used to define inserted text in HTML?',
          options: ['<ins>', '<i>', '<insert>', '<u>'],
          answer: '<ins>'
        },
        {
          question: 'Which tag is used to define underlined text in HTML?',
          options: ['<u>', '<underline>', '<ul>', '<ins>'],
          answer: '<u>'
        },
        {
          question: 'Which tag is used to define a keyboard input in HTML?',
          options: ['<kbd>', '<keyboard>', '<key>', '<input>'],
          answer: '<kbd>'
        },
        {
          question: 'Which tag is used to define a variable in HTML?',
          options: ['<var>', '<variable>', '<val>', '<value>'],
          answer: '<var>'
        },
        {
          question: 'Which tag is used to define a code snippet in HTML?',
          options: ['<code>', '<coding>', '<pre>', '<snippet>'],
          answer: '<code>'
        },
        {
          question: 'Which tag is used to define a sample output in HTML?',
          options: ['<samp>', '<sample>', '<output>', '<out>'],
          answer: '<samp>'
        },
        {
          question: 'Which tag is used to define computer output in HTML?',
          options: ['<output>', '<samp>', '<sample>', '<out>'],
          answer: '<output>'
        },
        {
          question: 'Which tag is used to define a quotation in HTML?',
          options: ['<q>', '<quote>', '<quotation>', '<blockquote>'],
          answer: '<q>'
        },
        {
          question: 'Which tag is used to define a block quotation in HTML?',
          options: ['<blockquote>', '<q>', '<quote>', '<quotation>'],
          answer: '<blockquote>'
        },
        {
          question: 'Which tag is used to define a citation in HTML?',
          options: ['<cite>', '<c>', '<citation>', '<ref>'],
          answer: '<cite>'
        },
        {
          question: 'Which tag is used to define a time/date in HTML?',
          options: ['<time>', '<date>', '<t>', '<datetime>'],
          answer: '<time>'
        },
        {
          question: 'Which tag is used to define an abbreviation for a time in HTML?',
          options: ['<abbr>', '<time>', '<date>', '<abbrv>'],
          answer: '<abbr>'
        },
        {
          question: 'Which tag is used to define a progress bar in HTML?',
          options: ['<progress>', '<bar>', '<progress-bar>', '<meter>'],
          answer: '<progress>'
        },
        {
          question: 'Which tag is used to define an importance in HTML?',
          options: ['<mark>', '<importance>', '<imp>', '<important>'],
          answer: '<mark>'
        },
      ];
      

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffledQuestions = initialQuestions.sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions.slice(0, 10)); // Take the first 10 questions
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    // Check if the selected option is correct
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Move to the next question after a brief delay
    setTimeout(() => {
      setSelectedOption('');
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    shuffleQuestions();
  };

  return (
    <div className="container-quiz">
      {!showResult ? (
        <>
          <h1>HTML Quiz</h1>
          <div className="question">
            <p>{questions[currentQuestion]?.question}</p>
          </div>
          <div className="options">
            {questions[currentQuestion]?.options.map((option, index) => (
      <button 
      key={index} 
      onClick={() => handleOptionSelect(option)} 
      className={`option-button ${
        selectedOption === option ? (option === questions[currentQuestion].answer ? 'correct' : 'incorrect') : ''
      }`}
      disabled={selectedOption !== ''}
    >
      {option}
    </button>
    
            ))}
          </div>
        </>
      ) : (
        <div className="result">
          <h1>Quiz Result</h1>
          <p>You scored {score} out of {questions.length}</p>
          <button onClick={resetQuiz}>Retry</button>
        </div>
      )}
    </div>
  );
};

export default HTMLQuiz;
