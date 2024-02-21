import React, { forwardRef, useEffect, useState } from 'react'

import { Button } from '../index'

import { useForm } from 'react-hook-form'

import config from '../../appwrite/config'
import authenticationServices from '../../appwrite/authentication'

import { useNavigate, useLocation, useParams } from 'react-router-dom'

import { Input } from '../index'

const PostForm = ({ postData }) => {

    const { postID } = useParams()

    const { register, handleSubmit } = useForm({
        defaultValues: {
            content: postData ? postData.content : null,
            postImage: postData?.postImage ? postData.postImage : null,
        }
    })

    const [userID, setUserID] = useState('')

    const navigate = useNavigate()
    const location = useLocation()

    const [error, setError] = useState('')

    useEffect(() => {
        authenticationServices.getUser().then((data) => {
            setUserID(data.$id)
        })


    }, [navigate, location])

    const postSubmit = async (data) => {
        console.log('done');
        try {
            if (postData) {
                const file = data.postImage[0] ? await config.uploadFile(data.postImage[0]) : null;

                if (file) {
                    await config.deleteFile(await config.getPost(postID).then(data => data.postImage))
                }

                const fileUpdate = await config.updatePost(postID, { ...data, postImage: file.$id, status: 'active' })

                fileUpdate && navigate(`/post/${postID}`)

            } else {
                const file = data.postImage[0] ? await config.uploadFile(data.postImage[0]) : null
                const postUpload = await config.createPost(crypto.randomUUID(), { ...data, postImage: file ? file.$id : null, userId: userID, status: 'active' })

                postUpload && navigate(`/post/${postUpload.$id}`)
                console.log('done');
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className=" flex items-center justify-around flex-col w-full pb-4">
            <form onSubmit={handleSubmit(postSubmit)} className="flex items-center justify-center gap-8 flex-col w-[70%]">
                <Input
                    type='text'
                    label='Your message'
                    placeholder='Write your thoughts here...'
                    {...register('content', { required: true })}
                />
                <Input
                    type='file'
                    label='Upload File'
                    placeholder='Upload File'
                    {...register('postImage', { required: !postData })}
                />

                {error && <p className=' font-poppins text-red-700'>error</p>}

                <Button type='submit' value={postData ? 'Update Post' : 'Post'} />
            </form>
        </div>
    )
}

export default forwardRef(PostForm)