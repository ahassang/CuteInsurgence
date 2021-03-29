import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const AdminLogin = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6} >
                    <p><Link to='/admin/home'>Admin Home</Link></p>
                        <Form >
                            <h1>Welcome Back! Please log in </h1>
                            <Form.Group controlId="formAdminName">
                                <Form.Label>Admin Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Admin Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    )
};

export default AdminLogin;