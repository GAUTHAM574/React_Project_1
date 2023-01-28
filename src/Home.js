import React from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:Blogs,isPending,error} = useFetch('http://localhost:5000/Blogs');
    return ( 
        <div>
        {error && <div>{ error }</div>}
        {isPending && <div>Loading...</div>}
        {Blogs && <BlogList Blogs={ Blogs } title="All Blogs"/>}
        </div>
    );
}
 
export default Home;