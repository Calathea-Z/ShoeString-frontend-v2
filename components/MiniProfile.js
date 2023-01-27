import React from 'react'
import Profile from '../assets/profile2.png'
import Image from 'next/image';

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <Image src={Profile} alt='' className='rounded-full border p-[2px] w-16 h-16'/>
        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>Calathea-Z</h2>
            <h3 className='text-sm text-gray-400'>Where in the world?</h3>
        </div>
        <button className='text-sky-300 text-sm'>Sign Out</button>
    </div>
  )
}

export default MiniProfile