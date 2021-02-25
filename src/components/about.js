import React from 'react';
import { Container } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = (props) => {

    return (
        <>
            <Container id="about">
                <h4 className="greeting">Hi, I'm...</h4>
                <h1 className="name">Maui Arcuri</h1>
                <div className="wrap">
                    <img className="personal-img" src="maui.png" />
                    <p>
                        I'm originally from Hawaii. I'm an incoming Computer Science graduate (2021) at the City College of New York.
                        In my free time, I dabble in making jazz music, trying new cooking recipes, or I'm out skateboarding.
                    <br></br><br></br>
                    I enjoy working on all types of software, but especially enjoy collaboration and contributing ideas on interesting projects.
                     In the past, I've had various successes and failures
                    in entrepreneurial ventures such as attempting to start a T-shirt business, to trying to create a Hawaiian snack business,
                    to buying and selling kitchen knives, and more. One day I would like to continue my entrepreneurship through software.
                </p>
                </div>
                <div>

                    <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/maui-arcuri/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open project"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        className="github"
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