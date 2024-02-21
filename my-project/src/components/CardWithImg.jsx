import React from 'react'

import { Link } from 'react-router-dom';

import ServicesDS from '../appwrite/config';

import facemashUser from '../assets/Untitled_Export-a5CMn8Nl2.jpeg'

const CardWithImg = ({ $id, userName, postImg, content }) => {
    return (
        <Link to={`/post/${$id}`} className=" flex items-center justify-around flex-col w-[18rem] h-[25rem] rounded-xl bg-[#50585d]"  >
            <div className=" flex items-center justify-start gap-2">
                <div>
                    <img src={facemashUser} className=' w-[3rem] rounded-[2.5rem]' alt="user img" />
                </div>
                <div>
                    <h5 className=' text-base font-semibold text-white'>{userName}</h5>
                </div>
            </div>
            <div className=" w-full mx-3">
                <p className=' font-poppins text-sm text-center text-white'>
                    {content}
                </p>
            </div>
            {postImg && <div className="">
                <img src={ServicesDS.getFile(postImg)} alt="" />
            </div>}
            <div className=" w-full flex-row flex items-center justify-between p-[20px] ml-[20px]">
                <svg class="h-8 w-8 text-zinc-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>

                <svg class="h-7 w-7 text-zinc-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </div>
        </Link>
    )
}

export default CardWithImg
