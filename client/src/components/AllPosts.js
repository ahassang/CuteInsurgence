import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
<<<<<<< HEAD
import { } from 'react-bootstrap';
=======
import {Button } from 'react-bootstrap';
>>>>>>> a47024cd6b21bdd6f9b3effda4b216d1f4373c70


const AllPosts = (props) => {

    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        axios
<<<<<<< HEAD
            .get("http://localhost:8000/cuteinsurgence")
=======
            .get("http://localhost:8000/CuteInsurgence")
>>>>>>> a47024cd6b21bdd6f9b3effda4b216d1f4373c70
            .then((response) => {
                console.log(response.data);
                setAllPosts(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

//Waiting for Controllers/db to be wired 
    return (
        <div className="cuteinsurgence-body-wrapper">
        <div className="AllPosts-post-display">
            <h2>SE Asian Tarsier</h2>
<<<<<<< HEAD
=======
            
>>>>>>> a47024cd6b21bdd6f9b3effda4b216d1f4373c70
            <div>
                Image & the data
           
            {
                allPosts.map((post, index) => (
                    <div key={index}>
                        <h3 className="post-display-title">
                            {post.title}
                        </h3>
                        <div>
                            <img className="post-display-img"
                                src={post.imageUrl}
                                alt={post.title}
                            />
                            <p>{post.category}</p>
<<<<<<< HEAD
                            <button className="post-display-viewpost-btn"
                                onClick={() => navigate(`/post/${post._id}`)}
                            >View Post </button>
=======
                            <Button className="post-display-viewpost-btn"
                                onClick={() => navigate(`/post/${post._id}`)}
                            >View Post </Button>
>>>>>>> a47024cd6b21bdd6f9b3effda4b216d1f4373c70
                        </div>
                    </div>
                ))
                
            }
             </div>
        </div>
<<<<<<< HEAD
=======
        
>>>>>>> a47024cd6b21bdd6f9b3effda4b216d1f4373c70
        </div>
    )
}

export default AllPosts;





// {
//     title: {
//         type: String,

//     },

//     description: {
//         type: String
//     },

//     category: {
//         type: String,

//     },

//     imageUrl: {
//         type: String,
//     },

//     videoURL: {
//         type: String,
//     },
// },
// { timestamps: true }