import React from 'react'
import discover_bg from '../assets/Discover_bg.png'
import Container from './Container'
import Flex from './Flex'
import Common_btn from './Common_btn'
const Discover_H = () => {
  return (
    <section style={{
        backgroundImage:`url(${discover_bg})`
    }}
    className='object-cover py-[120px]'
    >
   <Container>
    <Flex className={`items-center flex-col gap-10 justify-center lg:items-start lg:justify-start`}>
        <h1 className='font-bold font-Urbanist text-[30px]  md:text-[40px] text-white w-full md:w-[540px] text-center lg:text-start'>Discover the campus through 
        a video tour</h1>
        <Common_btn title={'Discover More'}/>
    </Flex>
   </Container>
    </section>
  )
}

export default Discover_H