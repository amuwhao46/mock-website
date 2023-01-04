import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ForestPage from './components/ForestPage';
import MountainPage from './components/MountainPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <ForestPage />
      <MountainPage />
      <Footer />
    </div>
  );
}

export default App;
