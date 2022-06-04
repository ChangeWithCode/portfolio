import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { createContext, useState } from "react";
import Footer from './components/Footer';

export const ThemeContext = createContext(null);


function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    
      
    <Router>
      <div className="App" id={theme}>
    <Navbar theme = {theme}  toggleTheme = {toggleTheme}/>
  
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={< Services />}></Route>
            <Route path="/projects" element={< Projects />}></Route>
            <Route path="/contact" element={< Contact />}></Route>
          </Routes>
    <Footer/>
    </div>
</Router>




  );
}

export default App;
