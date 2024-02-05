import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../index'
const Footer = () => {
    return (
        <footer className="bg-bg-color">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <Link
                        to={'/'}
                        className='flex items-center justify-center flex-row gap-4'
                        >
                            <Logo />
                            <h1 className=' font-poppins font-semibold text-2xl text-text-color'>facemash</h1>
                        </Link>
                    </div>

                    <p className="mt-4 text-center text-sm text-text-color lg:mt-0 lg:text-right">
                        Copyright &copy; 2024. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer