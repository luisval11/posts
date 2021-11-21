import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddPost from '../views/posts/AddPost';
import EditPost from '../views/posts/EditPost';
import { Post } from '../views/posts/Post';
import Posts from '../views/posts/Posts';

export const PostsRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<Posts/>}/>
                    <Route path="post/:id" element={<Post/>}/>
                    <Route path="post/:id/edit" element={<EditPost />}/>
                    <Route path="post/create" element={<AddPost />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default PostsRouter
