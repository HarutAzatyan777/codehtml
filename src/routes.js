import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Home from './pages/Home/Home';
import HtmlPage from './pages/Html/HtmlPage';
import HTMLCourses from './pages/Courses/HTMLCourses'; 
import ColorGenerator from './pages/ColorGenerator/ColorGenerator'

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HtmlPage" element={<HtmlPage />} /> 
      <Route path="/HtmlCourses" element={<HTMLCourses />} />
      <Route path="/Color" element={<ColorGenerator />} />
    </Routes>
  );
};

export default RoutesConfig;
