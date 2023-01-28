import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import useFetch from './useFetch';
const NewBlog = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('Alex');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog={title ,body ,author};

        setIsPending(true);
        fetch('http://localhost:5000/Blogs' , {
            method:'POST',
            headers: { "Content-Type" : "application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <form onSubmit={ handleSubmit }>
                <h2>Add a New Blog</h2>
                {!isPending && <span><p>{ title }</p></span> }
                {isPending && <p>Submitting...</p> }
                <label>Blog Title :</label>
                <input type="text" required value={ title } onChange={(e) => {setTitle(e.target.value)}}/>
                <label>Blog Body</label>
                <textarea required value={ body } onChange={(e) => { setBody(e.target.value) } }/>
                <label>Blog Author :</label>
                <select value={ author } onChange={ (e) => {setAuthor(e.target.value)} }>
                    <option value="Alex">Alex</option>
                    <option value="Bob">Bob</option>
                    <option value="Charlie">Charlie</option>
                </select>
                {!isPending && <button>Add Blog</button> }
            </form>
        </div>
    );
}
 
export default NewBlog;