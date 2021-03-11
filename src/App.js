import React from 'react';
import { PostCreate } from './components/post-create/post-create.component';

export default () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <PostCreate />
        </div>
    );
};