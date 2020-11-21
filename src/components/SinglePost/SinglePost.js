import React from 'react'

const SinglePost = ({ post }) => {
    const { title, thumb, date, excerpt, url } = post
    return (
        <div>
            {title}
        </div>
    )
}

export default SinglePost