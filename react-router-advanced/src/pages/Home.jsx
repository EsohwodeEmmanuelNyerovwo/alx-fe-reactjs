import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/login">Login</Link> | <Link to="/profile">Profile</Link>
            <br />
            <Link to="/post/101">Go to Post 101</Link>
        </div>
    );
};
export default Home;