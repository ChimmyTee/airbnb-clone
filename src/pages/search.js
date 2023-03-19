import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React from 'react'
import { format } from "date-fns"
import InfoCard from '@/components/InfoCard'

function Search({ searchResults }) {
    const router = useRouter();
    // console.log(router.query); <--- can use this to debug the object url router.

    // console.log(searchResults);

    // ES6 Destructoring of variables.
    const { location, startDate, endDate, noOfGuests } = router.query;

    // uses the library date-fns to format our startDate and endDate
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} to ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guest`} />

            {/* Representing the main section of the whole page */}
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays from {range} {noOfGuests} for guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3
                text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {searchResults.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

// use context as parameter if you want to extend the app with real data instead of dummy ones
export async function getServerSideProps() {
    const searchResults = await fetch('https://chimmytee.github.io/json-bin/search-stays.json').then(res => res.json());
    return {
        props: {
            searchResults,
        }, // will be passed to the page component as props
    }
}
