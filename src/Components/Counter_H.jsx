import React from 'react'
import Container from './Container'
import counter_bg from '../assets/Counter_bg.png'
import Flex from './Flex'
import { PiStudentBold } from "react-icons/pi";
import element_img from '../assets/Element.png'
const Counter_H = () => {
  return (
    <section>
        <Container>
            <div style={{
            backgroundImage:`url(${counter_bg})`,
            backgroundPosition:'center',
            backgroundSize:'cover'
            }}
            className='object-contain py-4 md:py-[74px] px-[40px] md:px-[80px] bg-no-repeat rounded-b-[15px]'
            >
          <Flex className={`items-center gap-3 justify-center flex-wrap md:gap-[120px]  lg:gap-[90px]`}>
           <Flex className={`flex-col items-center justify-center`}>
           <PiStudentBold size={70} className='text-custom_orange' />
           <span className='font-bold font-Urbanist text-[30px] lg:text-[60px] text-white'>30.3k</span>
           <span className='font-semibold font-Urbanist text-[16px] text-[#E4E4E4]'>Student Enrolled</span>
           </Flex>
           <div className='h-[220px] border-dashed border-[1px] border-[#979ee8] hidden md:block'></div>
           <Flex className={`flex-col items-center justify-center`}>
           <PiStudentBold size={70} className='text-custom_orange' />
           <span className='font-bold font-Urbanist text-[30px] lg:text-[60px] text-white'>30.3k</span>
           <span className='font-semibold font-Urbanist text-[16px] text-[#E4E4E4]'>Student Enrolled</span>
           </Flex>
           <div className='h-[220px] border-dashed border-[1px] border-[#979ee8] hidden lg:block'></div>
           <Flex className={`flex-col items-center justify-center`}>
           <PiStudentBold size={70} className='text-custom_orange' />
           <span className='font-bold font-Urbanist text-[30px] lg:text-[60px] text-white'>30.3k</span>
           <span className='font-semibold font-Urbanist text-[16px] text-[#E4E4E4]'>Student Enrolled</span>
           </Flex>
           <div className='h-[220px] border-dashed border-[1px] border-[#979ee8] hidden md:block'></div>
           <Flex className={`flex-col items-center justify-center`}>
           <PiStudentBold size={70} className='text-custom_orange' />
           <span className='font-bold font-Urbanist text-[30px] lg:text-[60px] text-white'>30.3k</span>
           <span className='font-semibold font-Urbanist text-[16px] text-[#E4E4E4]'>Student Enrolled</span>
           </Flex>
          </Flex>
            </div>
        </Container>
        <img className='translate-y-[-200px] ml-[80px] hidden lg:block' src={element_img} alt="" />
    </section>
  )
}

export default Counter_H