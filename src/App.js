import './App.css';
import React, { useEffect } from 'react';
import RoutesConfig from './routes'; // Import the routes configuration
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ReactGA from 'react-ga';
import reportWebVitals from './reportWebVitals'; // Import the modified reportWebVitals file
import Notification from './components/Notification/Notification';

function App() {

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-G2KGKYPNEV');

    // Track page view
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, []);

  const handlePerfEntry = (name, metric) => {
    console.log(`${name}:`, metric);
    // You can also send the metrics to Google Analytics or another analytics service here
  };
  
  // Initialize performance tracking
  useEffect(() => {
    reportWebVitals(handlePerfEntry);
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <RoutesConfig /> {/* Render the routes */}
      </main>
      <Footer />
      <Notification />
    </div>
  );
}

export default App;
