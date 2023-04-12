/* eslint-disable camelcase */
import React from 'react'

const MovieCard = ({ movie: { title, poster_path, id } }) => {
  return (
    <a href={`/movie/${id}`} className='bg-gray-700 w-[300px] hover:translate-y-1 transition-all'>
      <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} className='h-[450px] object-cover' />
    </a>
  )
}

export default MovieCard
