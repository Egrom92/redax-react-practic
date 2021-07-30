import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post';
import {fetchPosts} from '../redux/actions';

export default function FetchedPosts() {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loader = useSelector(state => state.app.loading)

    if(!posts.length) {
            return <button onClick={()=> dispatch(fetchPosts())} className={loader ? 'btn mt-4 w-10 btn-danger' : 'btn mt-4 w-10 btn-primary'}>Загрузить</button>
    }
    return <div className="row"> {posts.map(post => <Post post={post} key={post.id}/> )}</div>
}