import React from 'react';
import { Container } from 'react-bootstrap';

const About = (props) => {

    return (
        <>
            <Container>
                <h4>Hi, I'm...</h4>
                <h1>Maui Arcuri</h1>
                <p>
                    I'm an incoming Computer Science graduate (2021) at the City College of New York.
                    I specialize in web development and design. Previously, I've interned at WebMD as a front-end developer,
                    and I've worked on a virtual reality project as a software research intern.
                    In my free time, I dabble in making jazz music, trying new cooking recipes, or I'm out practicing
                    tricks on my skateboard.
                    I'm currently searching for a full time software development position.
                    <br></br><br></br>
                    I aspire to work on and create music related software. In the past, I've had various successes and failures
                    in entrepreneurial ventures such as attempting to start a T-shirt business on Hawaiian landscapes, to
                    making jazz covers of video game and anime music, to buying and selling kitchen knives, and more. I hope to
                    create a business in software in the future.
                </p>
            </Container>
        </>
    )
}

export default About;