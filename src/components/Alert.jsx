import React from 'react'

export default function Alert(props) {
    const {text} = props

    return (
        <div className="alert alert-danger mt-4" role="alert">
            {text}
        </div>
    )
}