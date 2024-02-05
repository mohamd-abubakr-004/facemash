import React from 'react'
import authenticationServices from '../../appwrite/authentication'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutBtn = () => {
        const deleteAcoount = authenticationServices.logout()
        if (deleteAcoount) {
            dispatch(logout())
            navigate('/')
        }
    }
    return (
        <button
            type='submit'
            className="block rounded-md bg-active text-text-color font-poppins px-5 py-2.5 text-sm font-medium transition hover:bg-blue-600"
            onClick={logoutBtn}
        >
            Logout
        </button>
    )
}

export default Logout