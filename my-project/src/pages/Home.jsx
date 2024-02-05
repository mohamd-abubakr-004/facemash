import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { NotLogined, CardWithImg, CardWithoutImg } from '../components/index'

import config from '../appwrite/config'

const Home = () => {

  const authStatus = useSelector(state => state.status)
  const authdata = useSelector(state => state.userData)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    config.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })

  }, [])

  
  if (authStatus === false) {
    return <NotLogined />
  }
  
  return (
    posts?.map((post) => {

      if (post.postImage) {
        return (
          <div key={post.content} className='p-7 bg-[#262626]'>
            <CardWithImg userName={authdata.name} postImg={post.postImage} content={post.content} />
          </div>
        )
      } else {
        return (
          <div key={post.content} className="p-7 bg-[#262626]">
            <CardWithoutImg userName={authdata.name} userId={post.userId} content={post.content} />
          </div>
        )
      }
    })
  )

}

export default Home
