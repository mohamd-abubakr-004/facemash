import React, { useEffect } from 'react'
import './App.css'

import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

import authenticationServices from './appwrite/authentication'

import {useDispatch} from 'react-redux'
import {login,logout} from './store/authSlice'
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    authenticationServices.getUser().then((userData) => {
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <>
      <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App