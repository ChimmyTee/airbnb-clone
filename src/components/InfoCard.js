import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-90 hover:shadow-lg
      transition duration-200 ease-out first:border-t'>
      <div className='relative my-auto h-40 w-56 md:h-52 md:w-80 flex-shrink-0'>
        <Image src={img} fill className='object-cover'/>
      </div>
      <div className='flex flex-col flex-grow pl-4 pt-1'>
        <div className='flex justify-between'>
          <p>{location}</p>
          <HeartIcon className='h-7 cursor-pointer'/>
        </div>
        <h4 className='text-xl font-semibold'>{title}</h4>
        <div className='border-b w-10 pt-2'></div>
        {/* gotta understand this flex grow, takes up all the vertical space available
        so we can have the star icon right at the bottom. */}
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

        <div className='flex justify-between items-end pt-5'>
          <p className='flex'>
            <StarIcon className='h-5 text-red-400' />
            {star}
          </p>

          <div>
            <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InfoCard