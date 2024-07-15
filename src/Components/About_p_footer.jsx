import React from 'react'
import Container from './Container'
import about_footer_bg from '../assets/about_bg_footer.png'
import Flex from './Flex'
import Common_btn from './Common_btn';
const About_p_footer = () => {
  return (
   <section>
    <Container>
        <div style={{
            backgroundImage:`url(${about_footer_bg})`,
            backgroundSize:'cover'
        }}
        className='py-[80px] px-[20px] md:py-[100px] md:px-[70px] bg-no-repeat rounded-t-[15px]'
        >
     <Flex className={`items-start md:items-center justify-between flex-col lg:flex-row`}>
      <h1 className='font-bold font-Urbanist text-[28px] lg:text-[40px] text-white w-full lg:w-[518px] mb-4 lg:mb-0'>Subscribe to our newsletter for daily updates</h1>
      <Flex className={`gap-3 flex-col md:flex-row`}>
        <input className='font-medium font-Urbanist text-[16px] text-hash w-[280px] lg:w-[352px] rounded-[6px] py-[22px] pl-6 outline-none' type="text" placeholder='Email Address' />
        <button className='py-[20px] px-[30px] lg:px-[50px] rounded-[10px] font-Urbanist font-bold text-[18px] text-white bg-custom_orange w-[181px]'>
        Subscribe
        </button>
      </Flex>
     </Flex>
        </div>
    </Container>
   </section>
  )
}

export default About_p_footer