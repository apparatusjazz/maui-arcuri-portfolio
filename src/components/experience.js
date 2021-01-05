import React from 'react';
import { Container } from 'react-bootstrap';
import ExperienceCard from './experience-card';

const Experience = (props) => {

    return (
        <>
            <Container>
                <h3>Experience:</h3>
                <ExperienceCard
                    image="webmd.png"
                    company="WebMD"
                    date="Jan-Aug 2020"
                    position="Software Development Intern"
                    location="New York, NY"
                    description="My main role was converting jquery based javascript codebase to modern ES6 for
                                WebMD's Medscape tech stack. This resulted in decreased javascript payload and 
                                better code readability. In addition, I implemented new features and bug fixes
                                for the front-end."
                    tech="Javascript ES6, CSS, HTML, jQuery, UDeploy, Jenkins, Gitlab, Jira"
                />
                <ExperienceCard
                    image="cipass.png"
                    company="CiPASS"
                    date="Summer 2019"
                    position="Virtual Reality Research Intern"
                    location="New York, NY"
                    description="I continued development of a virtual reality simulation of the NYC subway
                                called Virtual MTA intended to help autistic children. I implemented a 
                                difficulty system that controls
                                the amount of passengers and random events in the subway. I also worked with a partner
                                to put in realtime heart rate monitoring using a fitbit watch."
                    tech="Unity Game Engine, C#, Python"
                />
            </Container>
        </>
    )
}

export default Experience;