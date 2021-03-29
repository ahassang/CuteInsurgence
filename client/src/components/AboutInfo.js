import React from 'react';
import axios from 'axios';
import {Container, Row, Col, Media, Image} from 'react-bootstrap';


const AboutInfo = () =>{
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Media>
                            <img
                            width={300}
                            className=" mr-3"
                            src="https://i.pinimg.com/originals/b4/c9/9d/b4c99d060fe96a5b57bcd86e27775844.jpg"
                            alt="Rambo Hamster"
                            />
                            <Media.Body>
                            <h1>Who are we?</h1>
                            <h4>We are warriors
                            </h4>
                            <h5>who fight bad days with incredibly cute animal pictures, videos and commentary.<br/> Help us fight the good fight against boredom, grumpiness, and stinky attitudes! Follow the 5 sacred rules and send us a content submission with the form below to contribute to our cause!<br/>The 5 sacred rules:<br/>
                                    <br/>Rule 5 -  it must be cute<br/>
                                    <br/>Rules 4-  it must be kind<br/>
                                    <br/>Rules 3- it must be sweet<br/>
                                    <br/>Rules 2- it must be inspiring<br/>
                                    <br/>Rule 1- it must make you lolz<br/>
                                    
                                    <br/>
                            </h5><br/>
                            </Media.Body>
                        </Media><br/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default AboutInfo;