import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
    return (
        <div className="container pt-5">
            <h1 className='text-center'>Посты получатель</h1>
            <div className="row">
                <div className="col">
                    <PostForm/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h2>Синхронные Посты</h2>
                    <Posts/>
                </div>
                <div className="col">
                    <h2>Асинхронные посты</h2>
                    <FetchedPosts posts={[]}/>
                </div>
            </div>
        </div>
    );
}

export default App;
