import Movies from './Components/Movies';
import Slide from './Components/Slide';
import Navbar from './Components/Navbar';
import './App.css';
import Corner from './Components/Corner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Slide />
      <br />
      
      <Movies />
      
    </div>
  );
}

export default App;
