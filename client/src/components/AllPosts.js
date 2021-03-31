import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const AllPosts = (props) => {

    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts")
            .then((response) => {
                console.log(response.data);
                setAllPosts(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Container className='cuteinsurgence-single-post'> 
                <Row>
                    <Col>
                    {
                        allPosts.map((post, index) => (
                            <div key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={post.imageUrl} alt={post.title}/>
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>
                                        {post.category} : {post.description}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => navigate(`/posts/${post._id}`)}>View Post </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AllPosts;



