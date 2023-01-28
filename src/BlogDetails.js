import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const {data : blog, error, isPending} = useFetch(`http://localhost:5000/Blogs/${id}`);
    const history=useHistory();
    const handleDelete=() => {
        fetch('http://localhost:5000/Blogs/'+blog.id ,{
        method :'DELETE'}).then(()=>{
            //{isPending && <p>Deleting .....</p>}
            history.push('/');
        })
    }

    // const handleEdit = () => {
    //     console.log('edit');
    // }
    return (
        <div className="blog-details">
            { isPending && <div>Loading..</div>}
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <div className='blog-header'>
                        <h2>{ blog.title }</h2>
                        <p>Written by  { blog.author }</p>
                    </div>
                    <div className='blog-body'> {blog.body}</div>
                    <Link to={'../blogedit/'+ blog.id}><button className="edit" >Edit</button></Link>
                    <button onClick={ () =>{handleDelete()} }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;