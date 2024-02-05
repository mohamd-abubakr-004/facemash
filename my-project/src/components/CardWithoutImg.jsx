import React from 'react';
import { Link } from 'react-router-dom'
import facemashUser from '../assets/Untitled_Export-a5CMn8Nl2.jpeg'

const CardWithoutImg = ({ userName, content }) => {

    return (
        <div className=" flex items-center justify-between flex-col w-[12rem] h-[16rem] px-1 py-2 rounded-xl bg-[#50585d]">
            <div className=" flex items-center justify-start gap-2">
                <Link to={'user-id'}>
                    <img src={facemashUser} className=' w-[3rem] rounded-[2.5rem]' alt="user img" />
                </Link>
                <Link>
                    <h5 className=' mx-2 text-base font-semibold text-white'>{userName}</h5>
                </Link>
            </div>
            <div className=" overflow-auto w-full mx-4">
                <p className=' mx-2 font-poppins text-sm text-white text-center'>
                    {content}
                </p>
            </div>
            <div className=" w-full flex-row flex items-start m-1 mb-4 justify-start gap-[16px] ml-[20px]">
                <i className="hover:cursor-pointer fi fi-rr-heart"></i>
                <i className="hover:cursor-pointer fi fi-rr-comment-alt"></i>
            </div>
        </div>
    )
}

export default CardWithoutImg