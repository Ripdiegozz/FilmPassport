/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { MovieCard } from '@/components/Index'

export default function Home () {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const favorites = JSON.parse(window.localStorage.getItem('favorites') || '[]')
    setMovies(favorites)
  }, [])

  return (
    <div>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-6xl p-6 text-center'>Your favorites</h2>
      </div>
      {movies.length > 0
        ? <div className='w-full flex flex-wrap gap-8 justify-center mx-auto pt-6 pb-6'>
          {movies.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })}
        </div>
        : <div className='mx-auto text-center pt-8'>
          <h2 className='text-3xl'>You don't have any film on favorites :(</h2>
          <a href='/movies' className='underline mt-6 text-lg'>Add one to your list</a>
        </div>}
    </div>
  )
}
