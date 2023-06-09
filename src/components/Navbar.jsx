import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 justify-around flex-wrap'>
      <div className='flex'>
        <a href='/' className='btn btn-ghost normal-case text-xl flex gap-2'>
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-movie' width='44' height='44' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#ffffff' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <rect x='4' y='4' width='16' height='16' rx='2' />
            <line x1='8' y1='4' x2='8' y2='20' />
            <line x1='16' y1='4' x2='16' y2='20' />
            <line x1='4' y1='8' x2='8' y2='8' />
            <line x1='4' y1='16' x2='8' y2='16' />
            <line x1='4' y1='12' x2='20' y2='12' />
            <line x1='16' y1='8' x2='20' y2='8' />
            <line x1='16' y1='16' x2='20' y2='16' />
          </svg>
          Film Passport
        </a>
      </div>
      <div className='flex'>
        <a href='/movies' className='btn btn-square btn-ghost w-[5rem]'>
          Movies
        </a>
        <a href='/favorites' className='btn btn-square btn-ghost w-[5rem]'>
          Favorites
        </a>
      </div>
    </div>
  )
}

export default Navbar
