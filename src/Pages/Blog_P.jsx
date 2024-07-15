import React from 'react'
import Common_Banner from './../Components/Common_Banner';
import Blog_P_Pagination from '../Components/Blog_P_Pagination';

const Blog_P = () => {
  return (
    <>
     <Common_Banner title={`Blog`} subtitle={`Blog`}/> 
     <Blog_P_Pagination/>
    </>
  )
}

export default Blog_P