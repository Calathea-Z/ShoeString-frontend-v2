import Image from 'next/image';
import { BsSearch  }from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import FullLogo from '../assets/full_logo.png';
import BootsLogo from '../assets/boots_logo.png';
import ProfilePic from '../assets/profile2.png';
import { SlMenu } from 'react-icons/sl';
import { MdOutlineEmail} from 'react-icons/md';
import { SlPeople } from 'react-icons/sl';



function Header() {

  return (

<div className='shadow-sm border-b bg-white sticky top-0 z-50'>
{/* -----------Header Left */}
                        {/* Logo for Small Screens */}
    <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
            <Image src={ FullLogo } alt='Shoestring full logo' fill style={{objectFit: "contain"}} />
        </div>
                        {/* Logo for Larger Screens */}
        <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
            <Image src={ BootsLogo } alt='Shoestring icon logo' fill style={{objectFit: "contain"}} />
        </div>

{/* -----------HeaderMiddle */}
        <div className='max-w-xs'>
            <div className='relative mt-1 p-3 rounded-md'>
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                    <BsSearch className='h-5 w-5 text-gray-500' />
                </div>

                <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='Search'/>
            </div>
        </div>

{/* -----------HeaderRight*/}
        <div className='flex items-center justify-end space-x-4'>
        <AiFillHome className='navBtn' />
        <SlMenu className='h-6 md:hidden' />
        <MdOutlineEmail className='navBtn' />
        <SlPeople className='navBtn' />
        <Image src={ProfilePic} alt='profile' className='h-10 w-10 rounded-full cursor-pointer' />
        </div>
    </div>    
</div>

  )
}

export default Header