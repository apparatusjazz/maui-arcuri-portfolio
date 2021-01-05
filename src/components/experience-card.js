import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ExperienceCard = (props) => {

    return (
        <>
            <Container>
                <Row>
                    <Col md="auto" lg="auto" sm="auto" xs="auto">
                        <img className="experience-img" src={props.image} />
                    </Col>
                    <Col>
                        <Row>
                            <span>{props.company}</span>
                            <span>{props.date}</span>
                        </Row>
                        <Row>
                            <span>{props.position}</span>
                            <span>{props.location}</span>
                        </Row>
                        <Row>
                            {props.description}
                        </Row>
                        <Row>
                            Technologies: {props.tech}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ExperienceCard;