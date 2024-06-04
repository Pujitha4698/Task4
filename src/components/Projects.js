import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="project-item">
                    <h3>Project 1</h3>
                    <p>Description of project 1. Technologies used: HTML, CSS, JavaScript</p>
                    <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
                <div className="project-item">
                    <h3>Project 2</h3>
                    <p>Description of project 2. Technologies used: React.js, Node.js</p>
                    <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
