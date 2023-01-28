import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found" >
        <h2>opps url not found :sadge</h2>
        <p> Please click the below link to return to Home page or check your url</p>
        <Link to='/'>Return to Home</Link>
        </div>
    );
}
 
export default NotFound;