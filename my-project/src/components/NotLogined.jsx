import React from 'react'
import { Link } from 'react-router-dom'
const NotLogined = () => {
    return (
        <div className="relative flex items-center justify-center flex-1 bg-blue-600 h-[75vh] px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-center font-poppins text-4xl font-bold leading-tight text-white md:text-5xl">
                Sign Up to read posts
                </h2>
                <p className=' font-poppins text-center text-white mt-6 tracking-[0.25px]'>Facemash is a social site where you can post your pictures and express your feelings in the form of text.</p>
                <div className="mt-10 flex flex-col items-center justify-center space-y-5 sm:flex-row sm:gap-x-6 sm:space-y-0">
                    <Link
                        to="/sign-up"
                        rel="nofollow noreferrer"
                        className="w-full rounded-3xl border border-gray-900 bg-gray-900 px-7 py-3 text-center text-base font-bold text-white transition-colors duration-150 ease-in-out hover:border-gray-800 hover:bg-gray-800 sm:w-auto sm:border-2"
                    >
                        Create Account
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default NotLogined