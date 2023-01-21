import { useState, useEffect } from "react"
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { ImHeart } from "react-icons/im"
import { FaMapMarkerAlt } from "react-icons/fa"

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
    <div>
        <FaMapMarkerAlt className='btn' />
        <p>{location}</p>
        <p>{likes}</p>
        <ImHeart className="btn" />
        
    </div>
</div>
  )
}

export default SinglePost