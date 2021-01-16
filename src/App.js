import './App.css';
import About from './components/about';
import Experience from './components/experience';
import Navigation from './components/navigation';
import Projects from './components/projects';

function App() {
  return (
    <div className="main">
      <Navigation />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
