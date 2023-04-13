import React from 'react'
import Image from 'next/image'

const HeroComponent = () => {
  return (
    <div className='hero min-h-screen bg-base-200 mx-auto w-full'>
      <div className='hero-content flex-col lg:flex-row p-8 w-[80%]'>
        <Image src='https://martincid.com/wp-content/uploads/2022/10/Movie-Poster-scaled.jpg' width={350} height={550} className='shadow-2xl' />
        <div>
          <h1 className='text-5xl font-bold'>Mario World Premiere!</h1>
          <p className='pt-6'>
            Super Mario Bros: La Película (Super Mario Bros. Movie) ya tiene fecha y será estrenada en abril del 2023 en cines de todo el mundo.
          </p>
          <p className='py-2 pb-6'>
            La película de animación está dirigida por Michael Jelenic y Aaron Horvath, y cuenta con el guión escrito por Matthew Fogel. Está protagonizada por Chris Pratt, Anya Taylor-Joy, Charlie Day y Jack Black, entre otras muchas estrellas, que ponen voz a los protagonistas animados en esta adaptación del icónico videojuego.
          </p>
          <button className='btn btn-primary'>Ver más</button>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
