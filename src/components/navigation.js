import React from 'react';
import { Container } from 'react-bootstrap';

import '../css/main.css';
const Navigation = (props) => {

    return (
        <Container>
            <div className="header">
                {/* <div className="logo-container"> */}
                <img className="logo" src="mauilogo.png" alt="logo" />
                {/* </div> */}
                <div className="page-links">
                    <a href="#about" className="link">About</a>
                    <a href="#experience" className="link">Experience</a>
                    <a href="#projects" className="link">Projects</a>
                </div>
            </div>
        </Container>
    )
}

export default Navigation;