import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../css/main.css';
const Exp = (props) => {

    return (
        <>
            <Container className="exp-card">
                <Row className="img-container">
                    <img className="experience-img" src={props.image} />
                </Row>
                <div className="info">
                    <Row>
                        {props.position}
                    </Row>
                    <Row>
                        {props.date}
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Exp;