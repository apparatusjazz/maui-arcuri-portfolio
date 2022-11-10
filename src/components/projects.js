import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './project-card';

const Projects = (props) => {

    return (
        <>
            <Container id="projects">
                <h2>Projects:</h2>
                <div className="projects">
                    <Row>
                        <Col lg={6} md={6}>
                            <ProjectCard
                                key="jazzify"
                                image="jazzify.png"
                                title="Jazzify"
                                content="Wep app that generates uniques jazz recommendations based on your
                            Spotify listening genres and tracks. Very customizable with the ability
                            to create Spotify playlists."
                                github="https://github.com/apparatusjazz/jazzify-jazz-recommendations"
                                link="https://jazzify.blue/"
                                tech={["React", "Spotify API", "Bootstrap", "Material-UI"]}
                            />
                        </Col>
                        <Col lg={6} md={6}>
                            <ProjectCard
                                key="musaic"
                                image="musaic.png"
                                title="Musaic"
                                content="Soundcloud-like music sharing website. Project leader, owner of tracks / audio, design, main page. 
                                Made for Website Design class."
                                github="https://github.com/CSC47300/Final-Project"
                                link="https://musaic-69ec1.web.app/"
                                tech={["React", "Wavesurfer.js", "Bootstrap", "Cloud Firestore", "Firebase"]}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6} md={6}>
                            <ProjectCard
                                key="transcribifi"
                                image="spotifytranscriber.gif"
                                title="Spotify Transcriber Tool"
                                content="A Spotify playback tool with extra tools to help musicians transcribe music. 
                                Features include save points, looping, skip controls, full keyboard controls, and more."
                                link="https://github.com/apparatusjazz/Spotify-Transcriber-Tool"
                                tech={["React", "Spotify API"]}
                            />
                        </Col>
                        <Col lg={6} md={6}>
                            <ProjectCard
                                key="jazzapparatus"
                                image="jazzapparatus.png"
                                title="Jazz Apparatus"
                                content="Music gear documentation website with a focus on jazz guitarists. A project I created in high school 
                        when I first became interested in business. Many first rank pages on Google; search for &#39;(jazz guitarist's name) gear&#39;."
                                link="http://www.jazzapparatus.com/"
                                tech={["Wordpress", "Amazon Affiliate", "Adwords"]}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6} md={6}>
                            <ProjectCard
                                key="aorablue"
                                image="aorablue.png"
                                title="Aora Blue"
                                content="My Youtube channel where I've previously made jazz covers of anime and video game music."
                                link="https://www.youtube.com/channel/UC5B7gAB_pt6MwuIoIyWABWA"
                                tech={["Youtube", "Ableton", "Reaper", "Premiere"]}
                            />
                        </Col>
                    </Row>




                </div>
            </Container>
        </>
    )
}

export default Projects;