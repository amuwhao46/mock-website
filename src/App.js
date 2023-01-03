import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ForestPage from './components/ForestPage';
import MountainPage from './components/MountainPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <ForestPage />
      <MountainPage />
    </div>
  );
}

export default App;
