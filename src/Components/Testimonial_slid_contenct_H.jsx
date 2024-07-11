import React from 'react'
import Flex from './Flex'
import pick from '../assets/Image (1).png'
import { Rate } from 'antd';
const Testimonial_slid_contenct_H = () => {
  return (
    <div className='w-full border border-[#E4E4E4] p-3 lg:p-10 rounded-[15px]'>
    <Flex className={`gap-5  lg:gap-10 flex-col md:flex-row`}>
    <img src={pick} alt="" />
    <Flex className={`flex-col gap-4`}>
    <p className='w-full lg:w-[670px] font-Urbanist font-normal text-[20px] text-regal-blue leading-[37px]'>Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process Flexible Classes refers to the process of acquiring knowledge or skills </p>
    <span className='font-semibold font-Urbanist text-[16px] text-hash'>4.7 Average Rating</span>
    <Rate value={5} className='text-custom_orange'/>
    <div>
    <h4 className='font-bold font-Urbanist text-[24px] text-regal-blue'>Savannah Nguyen</h4>
    <h5 className='font-medium font-Urbanist text-[12px] text-hash'>UI/UX Designer</h5>
      
    </div>
    </Flex>
    </Flex>
    </div>
  )
}

export default Testimonial_slid_contenct_H