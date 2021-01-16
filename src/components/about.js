import React from 'react';
import { Container } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = (props) => {

    return (
        <>
            <Container id="about">
                <h4>Hi, I'm...</h4>
                <h1>Maui Arcuri</h1>
                <div className="wrap">
                    <img className="personal-img" src="maui.png" />
                    <p>
                        I'm an incoming Computer Science graduate (2021) at the City College of New York.
                        I enjoy web development and design.
                        In my free time, I dabble in making jazz music, trying new cooking recipes, or I'm out skateboarding.
                        I'm currently searching for a full time software development position.
                    <br></br><br></br>
                    I aspire to work on and create music related software. In the past, I've had various successes and failures
                    in entrepreneurial ventures such as attempting to start a T-shirt business on Hawaiian landscapes, to
                    making jazz covers of video game and anime music, to buying and selling kitchen knives, and more. I hope to
                    create a business in software in the future.
                </p>
                </div>
                <div>

                    <a
                        href="https://www.linkedin.com/in/maui-arcuri/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open project"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://github.com/apparatusjazz"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open project"
                    >
                        <GitHubIcon />
                    </a>

                </div>
            </Container>
        </>
    )
}

export default About;