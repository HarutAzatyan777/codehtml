import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Home from './pages/Home/Home';
import HtmlTag from './pages/Html/HtmlTag';
import HTMLCourses from './pages/Courses/HTMLCourses'; 
import ColorGenerator from './pages/ColorGenerator/ColorGenerator'

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HtmlTag" element={<HtmlTag />} /> 
      <Route path="/HtmlCourses" element={<HTMLCourses />} />
      <Route path="/ColorGenerator" element={<ColorGenerator />} />
    </Routes>
  );
};

export default RoutesConfig;
