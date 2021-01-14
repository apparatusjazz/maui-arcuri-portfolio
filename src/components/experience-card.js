import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../css/main.css';
const ExperienceCard = (props) => {

    return (
        <>
            <Container className="experience-card">
                <Row>

                    <Col>
                        <Row>
                            <Col md="auto" lg="auto" sm="auto" xs="auto">
                                <img className="experience-img" src={props.image} />
                            </Col>
                            <Col>
                                <Row className="block-row">
                                    <span className="left">{props.company}</span>
                                    <span className="right">{props.date}</span>
                                </Row>
                                <Row className="block-row">
                                    <span className="left">{props.position}</span>
                                    <span className="right">{props.location}</span>
                                </Row>
                            </Col>
                        </Row>
                        <div className="description">
                            {props.description}
                        </div>
                        <div className="tech">
                            Technologies: {props.tech}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ExperienceCard;