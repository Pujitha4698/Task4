import React from 'react';
import './Header.css';

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <h1>John Doe</h1>
      <p>Web Developer | JavaScript Enthusiast | Problem Solver</p>
      <nav>
        <ul>
          <li><button onClick={() => setPage('home')}>Home</button></li>
          <li><button onClick={() => setPage('about')}>About Me</button></li>
          <li><button onClick={() => setPage('projects')}>Projects</button></li>
          <li><button onClick={() => setPage('contact')}>Contact Me</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
