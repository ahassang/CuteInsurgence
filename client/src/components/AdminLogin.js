import React, {useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import {Form} from 'react-bootstrap';

const AdminLogin = (props) => {
        const [name, setName]= useState('');
        const [password, setPassword]= useState('');
        const [errMessage, setErrMessage] = useState('');
    
        const login = (e) => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/admin/login', {
                name: name,
                password: password})
            .then(response => {
                console.log("login data", response.data);
                Nav(`/admin/home`)
            })
            .catch(error => {
                console.log("problem with login.js",error);
                setErrMessage(error.response.data.msg);
        })
    };
    return (
        <div>
            <h1> AdminLogin.js </h1>
            <p><Link to= '/admin/home'>Admin Home</Link></p> 
            <Form>
                <Form.Group controlId="formAdminName">
                    <Form.Label>Admin Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Admin Name" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <button variant="primary" type="submit">
                    Submit
                </button>
            </Form>

        </div>
    )
};

export default AdminLogin;