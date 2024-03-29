import React, { useEffect, useState } from 'react'

import facemashUser from '../assets/Untitled_Export-a5CMn8Nl2.jpeg'

import config from '../appwrite/config'

import { useSelector } from 'react-redux'

import { CardWithImg, CardWithoutImg } from './index'

const Account = () => {

    const currentUser = useSelector(state => state.userData)

    const [posts, setPosts] = useState([])

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        config.getPosts().then((post) => {
            setPosts(post.documents)
        });

        config.AllUserAuthengate().then(user => setAllUsers(user.documents))
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
                                    {allUsers.map(user => user.userId == currentUser.$id && user.name)}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex items-center justify-start flex-wrap gap-[25px] p-7 bg-[#262626]">
                {
                    posts?.map((post) => {
                        if (post.userId == currentUser.$id) {
                            if (post.postImage == 'null') {
                                return (
                                    <div key={post.content}>
                                        <CardWithoutImg userName={allUsers.map(data => data.userId == post.userId && data.name)} userId={post.userId} $id={post.$id} content={post.content} />
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={post.content}>
                                        <CardWithImg userName={allUsers.map(data => data.userId == post.userId && data.name)} postImg={post.postImage} content={post.content} $id={post.$id} />
                                    </div>
                                )
                            }

                        }
                    })
                }
            </div>

        </div>

    )
}

export default Account