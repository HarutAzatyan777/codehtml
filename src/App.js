
import './App.css';
import RoutesConfig from './routes';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
     <main className="main-content">
        <RoutesConfig />
      </main>
      <Footer />
    </div>
  );
}

export default App;
