import React from 'react'
import Container from './Container'
import Flex from './Flex'
import frame_pick from '../assets/Frame.png'
const Frame_H = () => {
  return (
    <section className='my-[120px] lg:my-20'>
    <Container>
        <Flex className={`items-center flex-col lg:flex-row gap-20 lg:gap-[105px]`}>
        <img src={frame_pick} alt="" />
        <img src={frame_pick} alt="" />
        <img src={frame_pick} alt="" />
        <img src={frame_pick} alt="" />
        <img src={frame_pick} alt="" />
        </Flex>
    </Container>
    </section>
  )
}

export default Frame_H