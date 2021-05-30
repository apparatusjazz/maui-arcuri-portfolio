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
                        I'm originally from Hawaii. I'm a Computer Science graduate (2021) at the City College of New York.
                        In my free time, I dabble in making jazz music, trying new cooking recipes, or I'm out skateboarding.
                    <br></br><br></br>
                    I'm a diligent and passionate learner who wants to help others and make difference. I love programming for the 
                    creative ability to combine multiple disciplines and ideas like music and other interests into an application 
                    with unlimited possibilities. I've worked as a software developer intern at multiple companies and I've learned 
                    that I have a passion for learning new things and solving problems.
                    <br></br><br></br>
                    On the side, I've been able to integrate my love for jazz music into multiple programming projects. I also have an entrepreneurial interest and would like to work on interesting side projects in the future.
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