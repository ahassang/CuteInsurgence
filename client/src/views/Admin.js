import React from 'react';
<<<<<<< HEAD
import { Container, Row, Col, Form, Button, Nav} from 'react-bootstrap';
=======
import { Container, Row, Col, Nav} from 'react-bootstrap';
>>>>>>> 3f8d8c17cf9c7dfc03eec04f1f8320cb611f6e26
import PostForm from '../components/PostForm';
import AllSubmissions from '../components/AllSubmissions';
<<<<<<< HEAD


const Admin = () => {


    return (
        <div>
            <Container>
                <Nav className="justify-content-end">
                        <Nav.Item  >
                            <Nav.Link eventKey="link-2" href=" /cuteinsurgence">Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                <Container className='w-100 mx-auto border border-dark'>
                    <Row>
                        <Col className='p-2 m-2'>
                            <PostForm />
                        </Col>
                        <Col className='p-2 m-2'>
                            <AllSubmissions />
                        </Col>
                    </Row>
                </Container>
=======
import axios from 'axios';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';
import { navigate } from '@reach/router';


const Admin = () => {
    return (
        <div>
            <h1>Views/Admin.js</h1>
            <Container className='w-100 mx-auto border border-dark'>
                <Row>
                    <Col className='p-2 m-2'>
                        <PostForm />
                    </Col>
                    <Col className='p-2 m-2'>
                        <AllSubmissions />
                    </Col>
                </Row>
>>>>>>> a47024cd6b21bdd6f9b3effda4b216d1f4373c70
            </Container>
        </div>
    )
};

export default Admin;