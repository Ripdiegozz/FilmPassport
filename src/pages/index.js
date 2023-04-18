import React, { useState } from 'react'
import { MovieCard, HeroComponent, MovieCardSkeleton } from '@/components/Index'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Home ({ data }) {
  const heroMovie = data.results[Math.floor(Math.random() * data.results.length)]

  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState(data.results)

  const fetchData = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US&page=${page + 1}`)
    const data = await response.json()

    setPage(page + 1)
    setMovies([...movies, ...data.results])
  }

  return (
    <div>
      <HeroComponent movie={heroMovie} />

      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-6xl p-6 text-center'>Popular Movies</h2>
        <a href='/movies' className='font-medium underline text-xl py-4 text-center'>
          See all movies
        </a>
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={fetchData}
        hasMore
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
          }
        className='flex flex-wrap items-center justify-center gap-12 p-2 pb-16'
      >
        {movies.map((movie) => {
          return (
            <MovieCard key={movie.id} movie={movie} /> || <MovieCardSkeleton key={movie.id} />
          )
        })}
      </InfiniteScroll>
    </div>
  )
}

export async function getServerSideProps () {
  const page = 1
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US&page=${page}`)

  const data = await response.json()
  return {
    props: {
      data
    }
  }
}
