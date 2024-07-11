import React from 'react'
import Nav_bar from './Nav_bar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Sub_footer from './Sub_footer'

const RootLayout = () => {
  return (
    <>
    <Nav_bar/>
    <Outlet/>
    <Footer/>
    <Sub_footer/>
    </>
  )
}

export default RootLayout