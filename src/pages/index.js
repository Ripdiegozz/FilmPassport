import React from 'react'
import { MovieCard, HeroComponent } from '@/components/Index'

export default function Home ({ data }) {
  return (
    <>
      <HeroComponent />
      <h2 className='text-6xl p-6'>Popular Movies</h2>
      <a href='/movies' className='font-medium underline text-xl py-4'>
        See all movies
      </a>
      <div className='flex flex-wrap items-center justify-center gap-12 p-2 pb-16'>
        {
          data.results.map((item) => {
            return (
              <MovieCard key={item.id} movie={item} />
            )
          })
        }
      </div>
    </>
  )
}

export async function getServerSideProps () {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US')
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}
