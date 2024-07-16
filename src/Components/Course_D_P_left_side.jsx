import React from 'react'
import Flex from './Flex'
import left_img from '../assets/blog_d_left.png'
import { IoHeartCircleSharp } from "react-icons/io5";
import round_pick from '../assets/round_pick.png'
import { Rate } from 'antd';
const Course_D_P_left_side = () => {
  return (
    <Flex className={`flex-col gap-10`}>
    <div className='relative'>
        <img src={left_img} alt="" />
        <IoHeartCircleSharp size={44} className='absolute text-custom_orange top-10 left-10' />
    </div>
    <Flex className={`items-center justify-between flex-col md:flex-row`}>
       <Flex className={`items-center gap-2`}>
        <img src={round_pick} alt="" />
        <div>
            <h3 className='font-bold font-Urbanist text-[16px] text-regal-blue'>Guy Hawkins</h3>
            <h4 className='font-Urbanist font-medium text-[12px] text-hash'>Project Manager</h4>
        </div>
        </Flex> 
        <Flex className={`items-center gap-2 my-5 md:my-0`}>
            <span className='font-semibold font-Urbanist text-[14px] text-white py-[7px] px-[10px] rounded-[8px] bg-blue'>Development</span>
            <Rate value={5} className='text-custom_orange' />
            <span className='font-normal font-Urbanist text-regal-blue text-[14px]'>(25 Reviews)</span>
        </Flex>
        <div>
            <span className='font-Urbanist font-bold text-[32px] text-custom_orange'>$473.00</span>
        </div>
    </Flex>
    <h1 className='font-Urbanist font-bold text-[32px] text-regal-blue'>The Complete Web Developer Guideline 2023</h1>
    </Flex>
  )
}

export default Course_D_P_left_side