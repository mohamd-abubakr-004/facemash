import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from './index'

import { useForm } from 'react-hook-form'

import authenticationServices from '../appwrite/authentication'
import ServicesDS from '../appwrite/config'

import { login } from '../store/authSlice'

import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const signUpSubmit = async (data) => {
        setError('')
        try {
            const account = await authenticationServices.createAccount(data)
            if (account) {
                const loginUser = await authenticationServices.login(data)
                if (loginUser) {
                    const currentUser = await authenticationServices.getUser()
                    console.log(currentUser.name, currentUser.$id);
                    if (currentUser) {
                        dispatch(login(currentUser));
                        await ServicesDS.userAuthengate(currentUser)
                        navigate('/')
                    }
                }
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className="px-[3rem] py-[2rem] w-full bg-[#262626] sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl tracking-[.30px] text-[#1d4ed8]">Get started today!</h1>
                <p className="mt-4 text-text-color font-poppins tracking-[.9px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                    eaque error neque ipsa culpa autem, at itaque nostrum!
                </p>
            </div>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(signUpSubmit)} action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <Input type='text' placeholder='Inter your Full Name' label='Full Name' {...register('name', { required: true })} />
                </div>
                <div>
                    <Input type='email' placeholder='Inter your Email' label='Email' {...register('email', { required: true })} />
                </div>
                <div>
                    <Input type='password' placeholder='Inter your Password' label='Password' {...register('password', { required: true })} />
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-text-color">
                        Have account?
                        <Link className="underline text-text-color ml-1" to="/sign-in">
                            Sign in
                        </Link>
                    </p>

                    <Button type={'submit'} value={'Sign Up'} />
                </div>
            </form>
        </div>
    )
}

export default SignUp
