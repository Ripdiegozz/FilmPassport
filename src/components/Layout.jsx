import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
