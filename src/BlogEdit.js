import React, { useState } from 'react';
import {  useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';


const BlogEdit = () => {
    const {id}=useParams();
    const {data:blog,isPending,error} = useFetch(`http://localhost:5000/Blogs/${id}`);
    const [body,setBody]=useState('');
    const history=useHistory();
    const handleSubmit = ()=>{
        blog.body=body?body:blog.body;
        fetch(`http://localhost:5000/Blogs/${id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(blog)
    }).then(()=>{
        console.log("Blog edited");
        history.goBack();
    })
    };
    return(
    <div>
        {isPending && <p>Loading...</p> }
        {error && <h2>{ error} </h2>}
        {blog && ( 
            <div className="blog-edit">
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <textarea value={ body || blog.body } onChange={(e)=>{setBody(e.target.value)}}></textarea>
            <button onClick={()=>{handleSubmit()}}>Submit</button>
            </div>
        )}
    </div>
    )
}

export default BlogEdit;