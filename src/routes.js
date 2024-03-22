import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Import components
import Home from './pages/Home/Home';
import HtmlTag from './pages/Html/HtmlTag/HtmlTag';
import HTMLCourses from './pages/Courses/HTMLCourses';
import ColorGenerator from './pages/ColorGenerator/ColorGenerator';
import Resources from './pages/Resources/Resources';
import GetStarted from './pages/GetStarted/GetStarted';
import TrendingColor from './pages/TrendingColor/TrendingColor';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import BlogHome from './pages/Blog/BlogHome';
import AddPost from './pages/AddPost/AddPost';
import FullPost from './pages/FullPost/FullPost'; 
import Tags from './pages/Tags/tags'
import PostEdit from './components/Post/PostEdit';

// Redux actions and selectors
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

const RoutesConfig = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HtmlTag" element={<HtmlTag />} />
      <Route path="/HtmlCourses" element={<HTMLCourses />} />
      <Route path="/ColorGenerator" element={<ColorGenerator />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/TrendingColor" element={<TrendingColor />} />

      <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={isAuth ? <Navigate to="/" /> : <Registration />} />

      <Route path="/blogHome" element={<BlogHome />} /> {/* Fixed path */}


      <Route path="/add-post" element={isAuth ? <AddPost /> : <Navigate to="/login" />} />
      <Route path="/posts/:id" element={<FullPost />} />
      <Route path="/posts/:id/edit" element={<PostEdit />} />
      <Route path="/tags/:tagName" element={<Tags />} />
    </Routes>
  );
};

export default RoutesConfig;
