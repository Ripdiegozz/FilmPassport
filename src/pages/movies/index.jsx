import React, { useState } from 'react'
import { MovieCard } from '@/components/Index'
import InfiniteScroll from 'react-infinite-scroll-component'
export default function Home ({ data }) {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState(data.results)
  const [search, setSearch] = useState('')
  const [searchTitle, setSearchTitle] = useState('')

  const fetchData = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US&page=${page + 1}`)
    const data = await response.json()

    setPage(page + 1)
    setMovies([...movies, ...data.results])
  }

  const fetchSearch = async (search) => {
    let data
    setSearch(search)
    setSearchTitle(search)
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US&query=${search}&page=1&include_adult=false`)
    data = await response.json()

    if (search === '') {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US&page=${page}`)
      data = await response.json()
    }

    setMovies(data.results)
  }

  return (
    <div className='container'>

      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-6xl p-6 text-center'>All Movies</h2>
      </div>

      <div className='flex flex-wrap items-center justify-center'>
        <div className='form-control w-full max-w-lg pb-6 mx-auto'>
          <label className='label'>
            <span className='label-text'>Search for a movie</span>
          </label>
          <input type='text' placeholder='La La Land...' className='input input-bordered w-full max-w-lg' onChange={(event) => fetchSearch(event.target.value)} />
          {searchTitle !== '' ? <h3 className='text-center text-2xl p-2'>Searching for <span className='font-bold'>{searchTitle}</span></h3> : null}
        </div>
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
        className='flex flex-wrap items-center justify-center gap-12 px-2 pb-16 pt-8'
      >
        {movies.filter((movie) => {
          return search.toLowerCase() === ''
            ? movie
            : movie.title.toLowerCase().includes(search.toLowerCase())
        }).map((movie) => {
          return (
            <MovieCard key={movie.id} movie={movie} />
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
