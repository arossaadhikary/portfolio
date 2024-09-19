import './App.css';
import NavigationBar from './components/NavigationBar.js';
import Footer from './components/Footer.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Expereince from './components/Experience.js';
import Contact from "./components/Contact.js";

function App() {
  return (
    <div>
      < NavigationBar />
      < Intro />
      < About />
      < Projects />
      < Expereince />
      < Contact />
      < Footer />
    </div>
  );
}

export default App;
