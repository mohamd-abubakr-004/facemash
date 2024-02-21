import React from 'react'

import { PostForm } from '../components'

import { useParams } from 'react-router-dom'

const EditPost = () => {

    const { postID } = useParams()

    return (
        <div className='bg-[#262626]'>
            <PostForm postData={postID} />
        </div>
    )
}

export default EditPost
