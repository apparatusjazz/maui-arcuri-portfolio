import React from 'react';
import '../css/main.css';
const Navigation = (props) => {

    return (
        <>
            <div className="header">
                <div className="page-links">
                    <a href="#about" className="link">About</a>
                    <a href="#experience" className="link">Experience</a>
                    <a href="#projects" className="link">Projects</a>
                </div>
            </div>
        </>
    )
}

export default Navigation;