import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';


const AdminAuth = (props) => {
    const [admin, setAdmin] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/admin/home", {withCredentials: true})
            .then((res) => {
                console.log(res);
                setAdmin(res.data)
                })
            .catch(err => console.log("error with buttons.js"+ err))   
    }, []);

    const deletePost = (id) => {
        axios.delete("http://localhost:8000/api/posts/" + id, {
            withCredentials: true
        })
            .then((res) => {
                const deletedPost = res.data;
                console.log(deletedPost);
                navigate("/cuteinsurgence")
            })
            .catch((err) => {
                console.log(err);
            });
        }

    return(
        <div>
            {admin ? 
            <div>
            {/* <button style={{margin: "10px"}} onClick={() => navigate(`/admin/update/${post._id}`)}class="btn-small waves-effect green waves-light" type="submit" name="action">Edit
                <i class="material-icons right">edit</i>
                </button> */}
                <button
                // onClick={() => deletePost(post._id)}
                className="btn-small waves-effect red waves-light" type="submit" name="action">Delete
                <i className="material-icons right">delete</i>
            </button>
            </div>
            :
            null
        }
        </div>

    )
};

export default AdminAuth;