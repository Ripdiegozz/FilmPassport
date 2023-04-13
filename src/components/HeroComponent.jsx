/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HeroComponent = ({ movie: { title, poster_path, overview, id } }) => {
  const [posterPath, setPosterPath] = useState('')
  const [movieTitle, setMovieTitle] = useState('')
  const [movieOverview, setMovieOverview] = useState('')
  const [movieId, setMovieId] = useState('')

  useEffect(() => {
    setPosterPath(poster_path)
    setMovieTitle(title)
    setMovieOverview(overview)
    setMovieId(id)
  }, [])

  return (
    <div className='hero min-h-screen bg-base-200 mx-auto w-full'>
      <div className='hero-content flex-col lg:flex-row p-8 w-[75%]'>
        <Image src={`https://image.tmdb.org/t/p/w342/${posterPath}`} width={350} height={550} alt={title} className='shadow-2xl' priority />
        <div>
          <h1 className='text-5xl font-bold'>
            {movieTitle ||
              <SkeletonTheme baseColor='#fff' highlightColor='#fff'>
                <Skeleton count={1} />
              </SkeletonTheme>}
          </h1>
          <p className='py-6'>
            {movieOverview || <Skeleton count={4} />}
          </p>
          <a href={`/movie/${movieId}`} className='btn btn-primary'>See more</a>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
