import React, { useEffect, useState } from 'react'

import { Button } from '../index'

import { useForm } from 'react-hook-form'

import config from '../../appwrite/config'
import authenticationServices from '../../appwrite/authentication'

import { useNavigate } from 'react-router-dom'

import { Input } from '../index'

const PostForm = ({ postData }) => {

    const { register, handleSubmit } = useForm()

    const [userID, setUserID] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        authenticationServices.getUser().then((data) => {
            setUserID(data.$id)
        })
    }, [])

    const postSubmit = async (data) => {

        console.log('code is working');
        try {
            if (postData) {
                const file = data.postImage[0] ? await config.uploadFile(data.postImage[0]) : null
                if (file) {
                    file.$id = postData.postImage
                    await config.deleteFile(postData.postImage)
                }
                const fileUpdate = await config.updatePost(postData.$id, { ...data, postImage: file ? file.$id : undefined })

                // fileUpdate && navigate(`/post/${fileUpdate.$id}`)
                fileUpdate && navigate('/')

            } else {
                const file = data.postImage[0] ? await config.uploadFile(data.postImage[0]) : null

                if (file) {
                    const fileId = file.$id
                    data.postImage = fileId
                    const postUpload = await config.createPost({ ...data, userId: userID, postId: Date.now() })
                    // postUpload && navigate(`/post/${postUpload.$id}`)
                    postUpload && navigate('/')
                }
            }
        } catch (error) {
            console.log('error in postForm', error);
        }
    }

    return (
        <form onSubmit={handleSubmit(postSubmit)} className=' w-full h-[75vh] bg-[#262626] flex items-center justify-around flex-col'>
            <div className=" w-full flex items-center justify-center flex-col">
                <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-white dark:text-white font-poppins text-xl"
                >
                    Your message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-[75%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                    defaultValue={""}
                    {...register('content', { required: true })}
                />
            </div>
            <div className="flex items-center justify-center flex-col gap-6 w-[75%]">
                <Input
                    type='file'
                    label='Upload File'
                    placeholder='Upload File'
                    {...register('postImage', { required: !postData })}
                />
                <Button value={'Upload Post'} type={'submit'} />
            </div>

        </form>
    )
}

export default PostForm
