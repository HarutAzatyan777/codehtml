
import './App.css';
import React, { useEffect } from 'react';
import RoutesConfig from './routes';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import ReactGA from 'react-ga';
import Notification from './components/Notification/Notification';

function App() {

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-G2KGKYPNEV');

    // Track page view
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, []);
  return (
    <div className="App">
      <Header />
     <main className="main-content">
        <RoutesConfig />
      </main>
      <Footer />
      <Notification />
    </div>
  );
}

export default App;
