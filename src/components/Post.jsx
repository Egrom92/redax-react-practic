import React from 'react'

export default function Post(props) {

    const {post} = props
    return (
        <div className="card col-6 mt-3">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
            </div>
        </div>
    )
}