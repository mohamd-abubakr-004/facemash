import React, {ID, useEffect, useState } from 'react'

import facemashUser from '../assets/Untitled_Export-a5CMn8Nl2.jpeg'

import { useSelector } from 'react-redux'

import config from '../appwrite/config'
import authenticationServices from '../appwrite/authentication'

import { CardWithImg, CardWithoutImg } from './index'

const Account = () => {

    const [name, setName] = useState()

    const [posts, setPosts] = useState([])

    // const authdata = useSelector(state => state.userData.name)

    useEffect(() => {
        config.getPosts().then((post) => {
            setPosts(post.documents)
        });

        authenticationServices.getUser().then((user) => {
            setName(user.name)
        })
    }, [])

    return (
        <div className=" bg-[#262626] py-5">
            <div className='border-solid border-b-2 border-sky-500 pb-4'>
                <div>
                    <img
                        className="h-32 w-full object-cover lg:h-48"
                        src="https://resources.thomascook.in/images/holidays/sightSeeing/8-big-ben-min.jpg"
                        alt=""
                    />
                </div>
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div className="flex">
                            <img
                                className="h-20 w-20 rounded-full ring-4 ring-blue-300 sm:h-32 sm:w-32"
                                src={facemashUser}
                                alt="facemash user"
                            />
                        </div>
                        <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                                <h1 className="truncate text-2xl mb-[12px] font-bold text-blue-300">
                                    {name}
                                </h1>
                            </div>
                            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    <svg
                                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                                    </svg>
                                    <span>Message</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {posts?.map(post => (
                <div key={post.$id} className="p-7 bg-[#262626]">
                    {post.postImage ? <CardWithImg userName={name} postImg={post.postImage} content={post.content} /> : <CardWithoutImg userName={name} userId={post.userId} content={post.content} />}
                </div>
            ))}

        </div>

    )
}

export default Account
