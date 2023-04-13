/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MovieCard } from '@/components/Index'
import 'react-loading-skeleton/dist/skeleton.css'

const MovieDetails = ({ movie, video, watchProviders, similarMovies, movieCredits }) => {
  const [director, setDirector] = useState('')

  useEffect(() => {
    const directorName = []
    movieCredits.crew.map((crew) => {
      return crew.job === 'Director' ? directorName.push(crew.name) : null
    })
    setDirector(directorName)
  }, [])

  return (
    <section className='py-10'>
      <div class='relative mx-auto py-8'>
        <div class='flex flex-col justify-center items-center md:flex-row'>
          <div class='w-[100%] flex flex-col items-center justify-center'>
            <Image
              alt={movie.title}
              width={342}
              height={450}
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              class='rounded-xl object-fit'
            />
            <p className='pt-2 text-gray-200 text-center'> {movie.release_date.slice(0, 4)} / {director} / {movie.runtime} minutes </p>
          </div>

          <div class='w-[100%] p-2'>
            <div class='mt-8 flex justify-center md:justify-between'>
              <div class='flex flex-col gap-2'>
                <h1 class='text-4xl font-bold sm:text-6xl text-center md:text-start'>
                  {movie.title}
                </h1>
                <h3 class='text-xl font-bold sm:text-2xl text-center md:text-start'>
                  {movie.tagline}
                </h3>
                <div className='flex gap-2 p-2 flex-wrap justify-center md:justify-start'>
                  {
                      movie.genres.map((genre) => {
                        return (
                          <span className='badge' key={genre.id}>{genre.name}</span>
                        )
                      })
                    }
                </div>

                <p class='text-md flex items-center gap-2 justify-center md:justify-start'>
                  <span className='font-bold'>Rating:</span>
                  <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-star' width='20' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='#ffec00' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' />
                  </svg>
                  {Math.round(movie.vote_average, 1)}/10 ({movie.vote_count})
                </p>
              </div>
            </div>

            <div class='mt-4 flex flex-col gap-6 w-auto'>
              <div class='prose max-w-none'>
                <p className='text-center md:text-start'>
                  {movie.overview}
                </p>
              </div>

              <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} target='_blank' class='text-md w-full font-medium underline text-center md:text-start' rel='noreferrer'>Read More on IMDB</a>
            </div>

            {
                watchProviders.results.US === undefined
                  ? <p className='py-4 mt-4 text-md font-bold text-center md:text-start'> Not available to see on Internet. </p>
                  : (
                    <div className='mx-auto flex flex-col items-center md:items-start'>

                      <h3 className='mt-4 font-bold'>Watch it on</h3>
                      <div className='mt-4 flex flex-wrap gap-4 justify-center md:justify-start'>
                        {watchProviders.results.US.flatrate === undefined
                          ? <p>Not available on straming.</p>
                          : watchProviders.results.US.flatrate.map((provider) => (
                            <a href={watchProviders.results.US.link} key={provider.id} target='_blank' rel='noreferrer'>
                              <Image key={provider.id} src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} width={50} height={50} alt={provider.provider_name} />
                            </a>))}
                      </div>

                      <h3 className='mt-4 font-bold'>Rent or buy it on</h3>
                      <div className='mt-4 flex flex-wrap gap-4 justify-center md:justify-start'>
                        {watchProviders.results.US.rent === undefined
                          ? <p>Not available for rent or buying.</p>
                          : watchProviders.results.US.rent.map((provider) => (
                            <a href={watchProviders.results.US.link} key={provider.id} target='_blank' rel='noreferrer'>
                              <Image key={provider.id} src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} width={50} height={50} alt={provider.provider_name} />
                            </a>))}
                      </div>

                    </div>
                    )
            }
          </div>
        </div>
      </div>

      <h2 className='text-center text-6xl p-6 font-bold'>Trailers</h2>
      <div className='flex flex-wrap'>
        {
          // eslint-disable-next-line array-callback-return
          video.results.map((video) => {
            if (video.type === 'Trailer') {
              return (
                <iframe width='90%' height='500px' src={`https://www.youtube.com/embed/${video.key}`} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen key={video.id} className='mx-auto py-8 px-2 md:w-[45%]' />
              )
            }
          })
        }

        {/* // TODO: Add a fallback if there is no trailer */}

        {/* {
          video.results.map((video) => {
            if (video.type === 'Trailer') {
              trailerCount = trailerCount + 1
            }

            if (trailerCount === 0) {
              if (video.type === 'Teaser') {
                return (
                  <iframe width='46%' height='500px' src={`https://www.youtube.com/embed/${video.key}`} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen key={video.id} className='mx-auto py-8' />
                )
              }
            }
          })
        } */}
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-center text-6xl p-6 font-bold mt-14'>Similar Movies</h2>
        <a href='/movies' className='font-medium underline text-xl text-center py-6'>
          See all movies
        </a>
      </div>

      <div className='w-full flex flex-wrap gap-8 justify-center mx-auto pt-2'>
        {
          similarMovies.results.map((movie) => {
            return (
              <MovieCard movie={movie} key={movie.id} />
            )
          })
        }
      </div>

    </section>
  )
}

export const getStaticPaths = async () => {
  const query = 'https://api.themoviedb.org/3/movie/popular?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US'

  const response = await fetch(query)
  const movies = await response.json()

  const paths = movies.results.map((movie) => ({
    params: {
      id: `${movie.id}`
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const query = `https://api.themoviedb.org/3/movie/${id}?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US`
  const response = await fetch(query)
  const movie = await response.json()

  const videoQuery = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US`)
  const video = await videoQuery.json()

  const watchProvidersQuery = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=7872e92ab3de1ea67271b2266e243b06`)
  const watchProviders = await watchProvidersQuery.json()

  const similarMoviesQuery = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US&page=1`)
  const similarMovies = await similarMoviesQuery.json()

  const movieCreditsQuery = await fetch(`
  https://api.themoviedb.org/3/movie/${id}/credits?api_key=7872e92ab3de1ea67271b2266e243b06&language=en-US`)
  const movieCredits = await movieCreditsQuery.json()

  return {
    props: {
      movie,
      video,
      watchProviders,
      similarMovies,
      movieCredits
    }
  }
}

export default MovieDetails
