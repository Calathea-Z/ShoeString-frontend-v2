import React from 'react'
import Profile from '../assets/profile2.png'
import Image from 'next/image';

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <Image src={Profile} alt='' className='rounded-full border p-[2px] w-16 h-16'/>
        <div>
            <h2>Zach</h2>
            <h3>THanks for choosing Shoestring</h3>
        </div>
        <button>Sign Out</button>
    </div>
  )
}

export default MiniProfile