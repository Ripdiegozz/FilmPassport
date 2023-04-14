import React from 'react'

const GenresComponent = ({ genres }) => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-2 p-4 w-[75%] mx-auto'>
      {genres.map((genre) => <button className='badge' key={genre.id}>{genre.name}</button>)}
    </div>
  )
}

export default GenresComponent
