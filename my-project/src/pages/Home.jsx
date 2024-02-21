import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { NotLogined, CardWithImg, CardWithoutImg } from '../components/index'

import config from '../appwrite/config'

import { useNavigate, useLocation } from 'react-router-dom'

const Home = () => {

  const authStatus = useSelector(state => state.status)
  const authdata = useSelector(state => state.userData)

  const navigate = useNavigate()

  const [posts, setPosts] = useState([])

  const [apppwriteUsers, setApppwriteUsers] = useState([])

  const currentUrl = window.location.href;
  // console.log(currentUrl);

  const location = useLocation()
  // console.log(location.pathname);

  useEffect(() => {
    config.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
      config.AllUserAuthengate().then(data => {
        if (data) {
          setApppwriteUsers(data.documents)
        }
      })
    })

  }, [navigate, currentUrl, location.pathname])

  let postUserName
  let postUserId

  if (authStatus === true) {
    apppwriteUsers.map(user => {
      if (user.userId == authdata.$id) { postUserName = user.userId, postUserId = user.userId }
    })
  }

  if (authStatus === false) {
    return <NotLogined />
  }

  return (
    <div className=" flex items-center justify-start flex-wrap gap-[25px] p-7 bg-[#262626]">
      {
        posts?.map((post) => {
          if (post.postImage === 'null') {
            return (

              <div key={post.content}>
                <CardWithoutImg userName={apppwriteUsers.map(data => data.userId == post.userId && data.name)} userId={post.userId} $id={post.$id} content={post.content} />
              </div>

            )
          } else {
            return (
              <div key={post.content}>
                <CardWithImg userName={apppwriteUsers.map(data => data.userId == post.userId && data.name)} postImg={post.postImage} content={post.content} $id={post.$id} />
              </div>
            )
          }
        })
      }
    </div>
  )

}

export default Home
