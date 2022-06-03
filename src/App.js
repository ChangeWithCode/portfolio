import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    

    <Router>
    <Navbar />
    <div className="content">
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={< Services />}></Route>
            <Route path="/projects" element={< Projects />}></Route>
            <Route path="/contact" element={< Contact />}></Route>
          </Routes>
    </div>
</Router>


  );
}

export default App;
