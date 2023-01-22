import React from 'react'
import Header from '../components/Header';
import Image from 'next/image';
import FullLogo from '../assets/full_logo.png'

function signIn() {
  return (
<>
    <Header />
    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
        <Image src={FullLogo} alt='' className='w-200' />
        <h6 className='font-semibold, text-gray-500'>A Digital Guest Book For Planet Earth</h6>
        <div className='mt-36 flex gap-5 '>
            <button className='p-3 bg-sky-500 rounded-lg text-white'>
            Sign in
            </button>
            <button className='p-3 bg-sky-500 rounded-lg text-white'>
            Register
            </button>
        </div>
    </div>
</>
  )
}

export default signIn