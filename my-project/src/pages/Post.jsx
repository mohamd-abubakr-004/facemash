import React, { useEffect, useState } from 'react'

import ServicesDS from '../appwrite/config'

import { useParams } from 'react-router-dom'

const Post = () => {

    const { PostID } = useParams()
    const [post, setPost] = useState()

    useEffect(() => {
        ServicesDS.getPost(PostID).then((post) => {
            setPost(post)
        })
    }, [PostID])

    if (post) {
        return (
            <h1>{post.content}</h1>
        )
    }
}

export default Post