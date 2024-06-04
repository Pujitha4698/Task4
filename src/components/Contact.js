import React from 'react';
import './Contact.css';

const Contact = () => {
    const displayContactInfo = () => {
        const contactInfo = document.getElementById('contact-info');
        contactInfo.innerHTML = `
            <ul>
                <li>Name: John Doe</li>
                <li>Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a></li>
                <li>Twitter: <a href="https://twitter.com/johndoe" target="_blank">@johndoe</a></li>
                <li>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></li>
            </ul>
            <ul>
                <li>Twitter: <a href="https://twitter.com/janedoe" target="_blank">@janedoe</a></li>
                <li>GitHub: <a href="https://github.com/janedoe" target="_blank">github.com/janedoe</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/pujitha" target="_blank">linkedin.com/in/janedoe</a></li>
            </ul>
        `;
        contactInfo.style.display = 'block';
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <button className="contact-button" onClick={displayContactInfo}>Click to View Contact Info</button>
                <div id="contact-info" className="contact-info">
                    {/* Contact details will be displayed here */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
