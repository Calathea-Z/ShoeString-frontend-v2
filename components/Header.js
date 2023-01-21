import Image from 'next/image';
import { BsSearch  }from 'react-icons/bs'
import FullLogo from '../assets/full_logo.png'
import BootsLogo from '../assets/boots_logo.png'
function Header() {

  return (
    <div>
        <div className='flex justify-between max-w-6xl'>
            <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                 <Image src={ FullLogo } fill style={{objectFit: "contain"}} />
            </div>

            <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                 <Image src={ BootsLogo } fill style={{objectFit: "contain"}} />
            </div>

            <div className='relative mt-1 p-3 rounded-md'>
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                    <BsSearch className='h-5 w-5 text-gray-500' />
                </div>

                <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black' type='text' placeholder='Search'/>
            </div>
        </div>
    </div>

  )
}

export default Header