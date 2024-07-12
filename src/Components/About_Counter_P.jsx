import React from 'react'
import about_counter_bg from '../assets/About_Counter_bg.png'
import Container from './Container'
import Flex from './Flex'
const About_Counter_P = () => {
  return (
    <section style={{
     backgroundImage:`url(${about_counter_bg})`,
     backgroundSize:'cover',
     backgroundPosition:'center',
    }}
    className='object-contain pt-3 pb-[120px] bg-no-repeat border-b border-[#E4E4E4]'
    >
    <Container>
        <Flex className={`items-center gap-[36px] flex-col md:flex-row`}>
            <Flex className={`items-center justify-center flex-col  w-[60%] lg:w-[303px] py-10 border-[4px] border-blue border-dashed rounded-[14px] mx-auto`}>
             <span className='font-bold font-Urbanist text-[30px] md:text-[50px] text-custom_orange'>30.3k</span>
             <h4 className='font-semibold font-Urbanist text-[16px] text-hash'>Student Enrolled</h4>
            </Flex>
            <Flex className={`items-center justify-center flex-col  w-[60%] lg:w-[303px] py-10 border-[4px] border-blue border-dashed rounded-[14px] mx-auto`}>
             <span className='font-bold font-Urbanist text-[30px] md:text-[50px] text-custom_orange'>40.5k</span>
             <h4 className='font-semibold font-Urbanist text-[16px] text-hash'>Class completed</h4>
            </Flex>
            <Flex className={`items-center justify-center flex-col  w-[60%] lg:w-[303px] py-10 border-[4px] border-blue border-dashed rounded-[14px] mx-auto`}>
             <span className='font-bold font-Urbanist text-[30px] md:text-[50px] text-custom_orange'>88.9%</span>
             <h4 className='font-semibold font-Urbanist text-[16px] text-hash'>satisfaction rate</h4>
            </Flex>
            <Flex className={`items-center justify-center flex-col  w-[60%] lg:w-[303px] py-10 border-[4px] border-blue border-dashed rounded-[14px] mx-auto`}>
             <span className='font-bold font-Urbanist text-[30px] md:text-[50px] text-custom_orange'>6.30+</span>
             <h4 className='font-semibold font-Urbanist text-[16px] text-hash'>Top instructors</h4>
            </Flex>
        </Flex>
    </Container>
    </section>
  )
}

export default About_Counter_P