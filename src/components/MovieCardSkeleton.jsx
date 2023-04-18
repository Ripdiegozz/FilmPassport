/* eslint-disable camelcase */
import React from 'react'

const MovieCard = ({ movie: { id } }) => {
  return (
    <a href={`/movie/${id}`} className='bg-gray-700 w-[300px] hover:translate-y-1 transition-all movie-card animation-pulse'>
      <div className='h-[450px]' />
    </a>
  )
}

export default MovieCard
