import './App.css';
import NavigationBar from './components/NavigationBar.js';
import Footer from './components/Footer.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div>
      < NavigationBar />
      < Intro />
      < About />
      < Projects />
      < Footer />
    </div>
  );
}

export default App;
