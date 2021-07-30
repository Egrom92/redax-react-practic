import React from 'react'
import Post from './Post';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

const  Posts = (props) => {
    const {syncPosts} = props;

    if(!syncPosts.length) {
        return <p className="mt-4">Постов пока нет</p>
    }
    return <div className="row"> {syncPosts.map(post => <Post post={post} key={post.id}/>)}</div>
}

export default connect(mapStateToProps)(Posts)