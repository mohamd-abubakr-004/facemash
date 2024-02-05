import React from 'react'

import { Link } from 'react-router-dom';

import facemashUser from '../assets/Untitled_Export-a5CMn8Nl2.jpeg'

import heart from '../assets/heart.png';
import comment from '../assets/comment.png';

const CardWithImg = ({ userName, postImg, content }) => {
    return (
        <div className=" flex items-center justify-around flex-col w-[18rem] h-[25rem] rounded-xl bg-[#50585d]">
            <div className=" flex items-center justify-start gap-2">
                <Link to={'user-id'}>
                    <img src={facemashUser} className=' w-[3rem] rounded-[2.5rem]' alt="user img"/>
                </Link>
                <Link>
                    <h5 className=' text-base font-semibold text-white'>{userName}</h5>
                </Link>
            </div>
            <div className="">
                <img src={postImg} className=' w-[12rem]' alt="" />
            </div>
            <div className=" w-full mx-3">
                <p className=' font-poppins text-sm text-center text-white'>
                    {content}
                </p>
            </div>
            <div className=" w-full flex-row flex items-start justify-start gap-[16px] ml-[20px]">
                <img src={heart} className=' w-[1.20rem]' alt="" />
                <img src={comment} className=' w-[1.20rem]' alt="" />
            </div>
        </div>
    )
}

export default CardWithImg
