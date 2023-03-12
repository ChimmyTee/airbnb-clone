import React from 'react'
import BannerImage from "next/image"

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]'>
            <BannerImage
                src="https://links.papareact.com/0fm"
                alt=""
                fill
                // Trick here is that object-cover is necessary, when doing relative positions to fit image
                // perfectly under the header/menu
                className='object-cover object-top'
            />

            <div className='absolute top-1/2 w-full text-center'>
                {/* paragraph doesn't appear unless you make this div an absolute position, due to parent tag being relative. 
                    Remember that relative box is adjusted to being under the header, and absolute positioning puts the text back
                    into the relative box.
                */}
                <p className='text-red-600'>Not sure where to go? Perfect.</p>

                {/* bg-white doesn't show until you get some padding around the button */}
                <button className='text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3
                    hover:shadow-lg active:scale-95 transistion duration-100'>I'm flexible</button>
            </div>

        </div>
    )
}

export default Banner