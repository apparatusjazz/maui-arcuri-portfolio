import React from 'react';
import { Container } from 'react-bootstrap';

const ProjectCard = (props) => {

    const tech = props.tech.map(el => {
        return < span className="project-tech" >{el}</span >
    });

    return (
        <>
            <Container className="project-card">
                <div>
                    {/* <Col md="auto" lg="auto" sm="auto" xs="auto"> */}
                    <div>
                        <img className="project-img" src={props.image} alt="Maui head shot" />
                    </div>

                    <div className="description">
                        <div className="title">
                            <a
                                href={props.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Open project"
                            >
                                {props.title}
                            </a>

                        </div>
                        <div className="content">
                            {props.content}
                        </div>
                    </div>
                    {/* <div className="project-links">
                            <a
                                href={props.github}
                                className="github"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Github"
                            >
                                <GitHubIcon />
                            </a>
                            {props.link ? <a
                                href={props.link}
                                className="link"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Open link"
                            >
                                <OpenInNewIcon />
                            </a> : ''}
                        </div> */}
                    <div>
                        {tech}
                    </div>
                    {/* </Col> */}
                </div>
            </Container >
        </>
    )
}

export default ProjectCard;