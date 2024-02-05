import React from 'react'

import { PostForm, Container } from '../components'

import { useParams } from 'react-router-dom'

const EditPost = () => {

    const { postID } = useParams()

    return (
        <Container>
            <PostForm postData={postID} />
        </Container>
    )
}

export default EditPost
