import React from 'react';
import { Link } from 'react-router-dom'
import facemashUser from '../assets/Untitled_Export-a5CMn8Nl2.jpeg'

const CardWithoutImg = ({ $id, userName, content }) => {

    // console.log(authenticationServices.getUser($id.userId).then(data => console.log(data)));
    console.log();

    return (
        <Link to={`post/${$id}`} className=" flex items-center justify-between flex-col w-[12rem] h-[16rem] px-1 py-2 rounded-xl bg-[#50585d]">
            <div className=" flex items-center justify-start gap-2">
                <div>
                    <img src={facemashUser} className=' w-[3rem] rounded-[2.5rem]' alt="user img" />
                </div>
                <div>
                    <h5 className=' mx-2 text-base font-semibold text-white'>{userName}</h5>
                </div>
            </div>
            <div className=" overflow-auto w-full mx-4">
                <p className=' mx-2 font-poppins text-sm text-white text-center'>
                    {content}
                </p>
            </div>
            <div className=" w-full flex-row flex items-start m-1 mb-4 justify-between pr-3 ml-[20px]">
                <svg class="h-6 w-6 text-zinc-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>

                <svg class="h-6 w-6 text-zinc-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </div>
        </Link>
    )
}

export default CardWithoutImg