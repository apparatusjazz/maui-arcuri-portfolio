import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Exp from './exp';
import ExperienceCard from './experience-card';

const Experience = (props) => {

    return (
        <>
            <Container id="experience">
                <h3>Experience:</h3>
                <Row>
                    <Col lg="auto" md="auto">
                        <Exp
                            key="webmd"
                            image="webmd.png"
                            company="WebMD"
                            date="Feb-Aug 2020"
                            position="Software Development Intern"
                        />
                    </Col>
                    <Col lg="auto" md="auto">
                        <Exp
                            key="cipass"
                            image="cipass.png"
                            company="CiPASS"
                            date="Jun-Aug 2019"
                            position="Virtual Reality Research Intern"
                        />
                    </Col>
                </Row>


                {/* <ExperienceCard
                    key="webmd"
                    image="webmd.png"
                    company="WebMD"
                    date="Feb-Aug 2020"
                    position="Software Development Intern"
                    location="New York, NY"
                    description="My main role was converting jquery based javascript codebase to modern ES6 for
                                WebMD's Medscape tech stack. This resulted in decreased javascript payload and 
                                better code readability. In addition, I implemented new features and bug fixes
                                for the front-end."
                    tech="Javascript ES6, CSS, HTML, jQuery, UDeploy, Jenkins, Gitlab, Jira"
                />
                <ExperienceCard
                    key="cipass"
                    image="cipass.png"
                    company="CiPASS"
                    date="Jun-Aug 2019"
                    position="Virtual Reality Research Intern"
                    location="New York, NY"
                    description="I continued development of a virtual reality simulation of the NYC subway
                                called Virtual MTA intended to help autistic children. I implemented a 
                                difficulty system that controls
                                the amount of passengers and random events in the subway. I also worked with a partner
                                to put in realtime heart rate monitoring using a fitbit watch."
                    tech="Unity Game Engine, C#, Python"
                /> */}
            </Container>
        </>
    )
}

export default Experience;