import React from 'react';
import { Link } from 'react-router-dom';
const BlogList = (props) => { //({Blogs,title}) either ths way or line 2 and 3
    const Blogs=props.Blogs;
    const title=props.title;
    
    return ( 
        <div className="blogs-list">
            <h2>{ title }</h2>
            {
            Blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} >
                    <h2>{ blog.title }</h2>
                    <p style={{paddingLeft : "50px"}}>Written by { blog.author }</p>
                    </Link>
                </div>
            )) }
        </div>
    );
}
 
export default BlogList;