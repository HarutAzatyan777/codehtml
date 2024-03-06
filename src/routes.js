import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Home from './pages/Home/Home';
import HtmlPage from './pages/Html/HtmlPage';
import HTMLCourses from './pages/Courses/HTMLCourses'; 

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HtmlPage" element={<HtmlPage />} /> 
      <Route path="/HtmlCourses" element={<HTMLCourses />} />
    </Routes>
  );
};

export default RoutesConfig;
