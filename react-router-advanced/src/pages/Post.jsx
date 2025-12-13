import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { postId } = useParams();
    return (
        <div>
            <h1>Post Page</h1>
            <p>Showing post with ID: {postId}</p>
        </div>
    );
};

export default Post;