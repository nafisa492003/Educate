import React from 'react'
import Flex from './Flex'
import left_img from '../assets/side_img.png'
import { Rate } from 'antd';
import round_img from '../assets/round_pick.png'
import { Link } from 'react-router-dom';
const Course_contenct_H = () => {
  return (
   <section>
    <Flex className={`w-full lg:w-[642px] mx-auto bg-white gap-[30px] flex-col md:flex-row hover:border border-custom_orange rounded-[15px] transition-all duration-100`}>
    <img src={left_img} alt="" />
    <Link to='/course_details'>
    <Flex className={`flex-col p-4 md:p-[30px] gap-6 `}>
    <span className='font-Urbanist font-semibold text-[14px] text-white py-[8px] px-[10px] bg-regal-blue rounded-[5px] w-[75px]'>
    20 Hours
    </span>
    <Flex className={`items-center gap-[4px]`}>
    <Rate  value={5} className='text-custom_orange' />
      <span className='font-Urbanist font-normal text-[14px] text-regal-blue'>(30 Reviews)</span>
    </Flex>
    <h1 className='font-bold font-Urbanist text-[24px] text-regal-blue'>Management Consultants in 
    Competitive Markets </h1>
    <Flex className={`w-full py-3 px-4 bg-[#F6F6F6] rounded-[6px] items-center justify-between`}>
      <Flex className={`items-center gap-[10px]`}>
      <img src={round_img} alt="" />
        <div>
          <h4 className='font-Urbanist font-bold text-[16px] text-regal-blue'>Guy Hawkins</h4>
          <h5 className='font-Urbanist font-medium text-[12px] text-[#697585]'>Project Manager</h5>
        </div>
      </Flex>
      <div>
      <h4 className='font-Urbanist font-bold text-[20px] text-regal-blue'>$360.00</h4>
      <h5 className='font-Urbanist font-medium text-[14px] text-[#697585]'>15 Lessons</h5>
      </div>
    </Flex>
    </Flex>
    </Link>
    </Flex>
   </section>
  )
}

export default Course_contenct_H