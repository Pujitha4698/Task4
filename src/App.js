import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="header">
                <nav className="navbar">
                    <a href="#" className="nav-branding">My Portfolio</a>
                    <ul className="nav-menu">
                        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link">About Me</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
