import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { Link } from 'react-router-dom'
const Common_Banner = ({title , subtitle}) => {
  return (
    <section className='py-[100px]  md:py-[170px] bg-black'>
   <Container>
    <Flex className={`items-center justify-center flex-col gap-5`}>
    <h1 className='font-bold font-Urbanist text-[30px] md:text-[50px] text-white'>{title}</h1>
    <Flex className={`items-center gap-2`}>
       <Link to='/' className='font-normal font-Urbanist text-[20px] text-white'>Home</Link>
       <span className='font-normal font-Urbanist text-[20px] text-white'>/</span>
       <span className='font-normal font-Urbanist text-[20px] text-white'>{subtitle}</span>
    </Flex>
    </Flex>
   </Container>
    </section>
  )
}

export default Common_Banner