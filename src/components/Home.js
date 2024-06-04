import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="container">
                <div className="home-content">
                    <h1 className="home-title">Hi, I'm Pujitha</h1>
                    <p className="home-description">A passionate Web Developer specializing in creating beautiful and functional web applications.</p>
                    <img src="/profile.jpg" alt="Professional Photo" className="home-photo" />
                    <div className="home-skills">
                        <h2>Skills:</h2>
                        <ul className="skills-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <a href="#about" className="cta-button">Learn More About Me</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
