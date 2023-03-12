import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData }) {
  return (
    <>
      <Head>
        <title>Jimmy's Airbnb</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-2xl font-semibold pb-5'>Explore nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          {/* note that the exploreData has a ?, it is used to handle if the data is there or not gracefully */}
          {exploreData?.map((item) => (
              <h1>{item.location}</h1>
          ))}
          {/* {exploreData[0].location} */}
        </section>
      </main>

    </>
  )
}

/* getStaticProps is a Next.Js function that allows pages to load faster than
regular React. NextJS tells the server to only pre-load the home screen instead
of all the pages. Hence speeding up the application in general. AKA Server-side Rendering

Read more: https://nextjs.org/docs/api-reference/data-fetching/get-static-props
*/
export async function getStaticProps() {
  // When "fetching" data from an endpoint, we must always use Await.
  // const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json())

  // const res = await fetch('https://www.jsonkeeper.com/b/4G1G')
  // const exploreData = await res.json()

  // return {
  //   props: { exploreData }, // will be passed to the page component as props
  // }
  try {
    const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(res => res.json())
    return {
      props: { exploreData },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {},
    }
  }
}