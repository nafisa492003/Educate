import React from 'react'
import Container from './Container'
import Common_title from './Common_title'
import Bolg_contenct_H from './Blog_contenct_H'
import Flex from './Flex';
import pick from '../assets/Blog_BG.png'
const Blog_H = () => {
  return (
    <section className='my-[80px]'>
        <Container>
            <Common_title subtitle={`Latest Blog`} title={`Latest Updates & Articles`} />
            <Flex className={`items-center gap-[36px] flex-col lg:flex-row lg:translate-y-[242px] translate-y-[70px]`}>
            <Bolg_contenct_H/>
            <Bolg_contenct_H/>
            <Bolg_contenct_H/>
            </Flex>
        </Container>
        <img className='hidden lg:block' src={pick} alt="" />
    </section>
  )
}

export default Blog_H