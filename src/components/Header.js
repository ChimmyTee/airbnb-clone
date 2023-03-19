import HeaderImage from 'next/image'
import React from 'react'
import { useState } from 'react'
import { MagnifyingGlassIcon, UserCircleIcon, Bars3Icon, UsersIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'


function Header({ placeholder }) {
  // basic syntax for useState()
  const [searchInput, setSearchInput] = useState('');
  // new Date() gives us today. 
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // default no. of guests is 1
  const [noOfGuests, setNoOfGuests] = useState(1);
  // router is used to re-direct pages
  const router = useRouter();

  const search = () => {
    // instead of a doing a re-direct we can pass in an object
    // router.push('/search');
    // query parameter, carries the query through to the url.
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => {
    setSearchInput('');
  }

  return (
    // Import to use header tag for SEO purposes
    // <header className='sticky top-0 z-50 p-4 shadow-md flex justify-between bg-white bg-transparent'>
    <header className='sticky top-0 z-50 p-4 shadow-md bg-white bg-transparent flex flex-wrap'>
      {/* Use Nextjs P images, because it reduces file size significantly, compared to JPEG, etc */}
      {/* router using push is so we can have stack functionality, that we can go forward and back
      between our pages. "/" is the homepage */}
      <div className='flex basis-full justify-between'>
        <div onClick={() => router.push("/")} className="cursor-pointer flex items-center">
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
            type='text' placeholder={placeholder || 'Start your search'} className='outline-none text-gray-600 basis-full' />
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
      </div>

      {/* This mean if there's text in searchInput then print hello World */}
      {/* {searchInput && <h1>Hello World</h1>} */}
      {searchInput &&
        (<div className='flex flex-col mx-auto'>
          <DateRangePicker ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className='flex justify-between border-b mb-2'>
            <h2 className='text-2xl font-semibold'>Number of Guests</h2>
            <div className='flex'>
              <UsersIcon className='h-6 mt-1' />
              <input value={noOfGuests} type="number" min={1} className='w-12 pl-2 text-lg outline-none text-red-400'
                onChange={e => setNoOfGuests(e.target.value)}
              />
            </div>
          </div>

          <div className='flex'>
            {/* The flex grow is basically the same as justify-around */}
            <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
            <button onClick={search} className='flex-grow text-red-400'>Search</button>
          </div>
        </div>)}
    </header>
  )
}

export default Header