import React from 'react';
<<<<<<< HEAD
import { Container, Row, Col, Form, Button, Nav} from 'react-bootstrap';
=======
import { Container, Row, Col, Nav} from 'react-bootstrap';
>>>>>>> 3f8d8c17cf9c7dfc03eec04f1f8320cb611f6e26
import PostForm from '../components/PostForm';
import AllSubmissions from '../components/AllSubmissions';


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
            </Container>
        </div>
    )
};

export default Admin;