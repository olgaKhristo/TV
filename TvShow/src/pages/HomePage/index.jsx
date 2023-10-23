import React from 'react';
import {Link} from 'react-router-dom';

const linkStyle = {
    color: "#1746A2"  
}
 
export default function index() {
    return (
        <>
            <h1>Top TV</h1>
            <em>All about</em>
            <ul>
                <li><Link to="/shows" style={linkStyle}> Explore Shows</Link></li>
                <li><Link to="/search" style={linkStyle}>Search</Link></li>
            </ul>
        </>
    )
}