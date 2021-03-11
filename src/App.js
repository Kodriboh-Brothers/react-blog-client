import React from 'react';
import { PostCreate } from './components/post-create/post-create.component';
import { PostList } from './components/post-list/post-list.component';

export default () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <PostCreate />
            <hr />
            <h1>Posts</h1>
            <PostList />
        </div>
    );
};