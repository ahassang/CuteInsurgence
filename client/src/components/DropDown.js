// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, navigate } from '@reach/router';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';


// const DropDown = (props) => {
//     const { id } = props;
//     const [post, setPost] = useState('');
//     const [title, setTitle] = useState('');
//     const [category, setCategory] = useState('');
//     const [imageURL, setImageURL] = useState('');
//     const [videoURL, setVideoURL] = useState('');
//     const [description, setDescription] = useState('');
//     const [errs, setErrs] = useState({});

//     useEffect(() => {
//         axios
//             .get("http://localhost:8000/api/posts/" + id)
//             .then((res) => {
//                 const singlePost = res.data;
//                 console.log(singlePost);
//                 setTitle(singlePost.title);
//                 setCategory(singlePost.category);
//                 setImageURL(singlePost.imageURL);
//                 setVideoURL(singlePost.videoURL);
//                 setDescription(singlePost.description);
//         });
//     }, []);

//     const DropDown = (e) => {
//         e.preventDefault();
//         axios.get("http://localhost:8000/api/posts/" + id, {
//             title: title,
//             category: category,
//             imageURL: imageURL,
//             videoURL: videoURL,
//             description: description
//         })
//             .then((response) => {
//                 if (response.data.errors) {
//                     console.log(response.data.errors)
//                     setErrs(response.data.errors)
//                 } else {
//                     console.log(response.data);
//                     navigate(`/posts/${response.data._id}`);
//                 }
//             })
//             .catch((err) => console.log("error with UpdatePost.js", err))
//     };


//     return (
//         <div >
//             <input type='dropdown' />
//             {
//             posts.map((post, key) => {

//                 return (
                
//                 <div className='category' key={key} >{post.category}</div>

//                 )
//             })}
//         </div>
//     )
// }

// export default DropDown;




// <Form.Control as="select" type='category' name="category" value= {state.category} onChange={(e) => onChange(e)} placeholder='Category'>
//                                         <option>Select Category</option>
//                                         <option value= 'Farm Animals'>Farm Animals</option>
//                                         <option value= 'Wildlife'>Wildlife</option>
//                                         <option value='Dogs'>Dogs</option>
//                                         <option value= 'Cats'>Cats</option>
//                                         <option value= 'Birds'>Birds</option>
//                                         <option value= 'Reptiles'>Reptiles</option>
//                                         <option value= 'Fish'>Fish</option>
//                                         <option value= 'Bugs'>Bugs</option>
//                                         <option value= 'Rodents'>Rodents</option>
//                                     </Form.Control>


