import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import store from './store/store.js'

import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'
import AccountPage from './pages/AccountPage.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import User from './pages/User.jsx'
import Messenger from './pages/Messenger.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="/" element={<Home />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/edit-post/:postID" element={<EditPost />} />
      <Route path="/post/:postID" element={<Post />} />
      <Route path="/user/:userID" element={<User />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-Up" element={<SignUp />} />
      <Route path="/messenger" element={<Messenger />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)