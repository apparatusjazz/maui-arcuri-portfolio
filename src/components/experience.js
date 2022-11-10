import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Exp from './exp';

const Experience = (props) => {

    return (
        <>
            <Container id="experience">
                <h2>Experience:</h2>
                <Row>
                    <Col lg="auto" md="auto">
                        <Exp
                            key="credera"
                            image="credera.png"
                            company="Credera"
                            date="July 2021 - Present"
                            position="Front-End Developer"
                        />
                    </Col>
                    <Col lg="auto" md="auto">
                        <Exp
                            key="columbia"
                            image="columbia.png"
                            company="Columbia University IT"
                            date="Feb - May 2021"
                            position="Software Development Intern"
                        />
                    </Col>
                    <Col lg="auto" md="auto">
                        <Exp
                            key="webmd"
                            image="webmd.png"
                            company="WebMD"
                            date="Feb - Aug 2020"
                            position="Software Development Intern"
                        />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Experience;