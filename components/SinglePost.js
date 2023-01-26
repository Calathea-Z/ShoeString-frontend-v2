import { useState, useEffect } from "react"
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart } from "react-icons/ai"
import { FaMapMarkerAlt } from "react-icons/fa"
import { BsEmojiSunglasses } from 'react-icons/bs'

const SinglePost = ({ username, _id, img, profile_img,  location, body, tags, likes }) => {
    
  return (
<div className='bg-white my-7 border rounded-sm'>
{/*----------Post Header*/}
    <div className='flex items-center p-5'>
        <img src={profile_img} alt='' className='rounded-full h-12 w-12 object-container border p-1 mr-3' />
        <p className='flex-1 font-bold'>{username}</p>
        <BiDotsHorizontalRounded className='h5' />
    </div>
{/*----------Post Image Section */}
    <img src={img} alt='' className='object-cover w-full' />
{/*----------Post Middle Section (Buttons)*/}
    <div className='flex space-x-4 justify-between px-4 pt-4'>
        <div className='flex space-x-3 content-center items-center'>
            <FaMapMarkerAlt className='btn  text-sky-300' />
            <p className='font-semibold'>{location}</p>
        </div>

        <div className='flex space-x-2 content-center items-center'>
            <p className='font-semibold'>{likes}</p>
            <AiOutlineHeart className="btn" />
        </div> 
    </div>
{/*----------Post Caption Area*/}
    <p className='p-5 truncate'><span className='font-bold m-1'>{username}</span>
        {body}
    </p>
{/*----------Comments Area*/}

{/*----------Comment Input Form*/}
    <form className='flex items-center p-4'>
        <BsEmojiSunglasses className='h-7' />
        <input type='text' placeholder='Add a comment...' className='border-none flex-1 focus:ring-0 outline-none' />
        <button className='font-semibold text-sky-300'>Post</button>
    </form>
</div>
  )
}

export default SinglePost