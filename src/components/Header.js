import HeaderImage from 'next/image'
import React from 'react'
import { useState } from 'react'
import { MagnifyingGlassIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'



function Header() {
  const [searchInput, setSearchInput] = useState('')
  console.log(searchInput)

  return (
    // Import to use header tag for SEO purposes
    <header className='sticky top-0 z-50 p-4 shadow-md flex justify-between bg-white bg-transparent'>

      {/* Use Nextjs P images, because it reduces file size significantly, compared to JPEG, etc */}
      <div className="cursor-pointer flex items-center">
        <HeaderImage src="https://links.papareact.com/qd3"
          alt=""
          width={150}
          height={150}
          className='object-contain object-left'
        // style={{ objectFit: 'fill' }}
        />
      </div>

      <div className="flex max-w-md grow items-center justify-between border-2 rounded-full px-3 mx-2 shadow-sm">
        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
            type='text' placeholder='Start your search' className='outline-none text-gray-600' />
        <MagnifyingGlassIcon className='h-8 bg-red-400 text-white rounded-full p-2 ml-2 cursor-pointer' />
      </div>

      <div className='flex space-x-2 items-center text-gray-600'>
        <p className='hidden md:inline'>Become a Host</p>
        <GlobeAltIcon className='hidden md:inline h-6 cursor-pointer' />
        <div className='flex items-center border-2 rounded-full p-2 cursor-pointer'>
          <Bars3Icon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  )
}

export default Header