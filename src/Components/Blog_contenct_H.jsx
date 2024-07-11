import React from 'react'
import blog_img from '../assets/Img (3).png'
import Flex from './Flex';
import round_img from '../assets/round_pick.png'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
const Blog_contenct_H = () => {
  return (
    <div className='w-full md:w-[416px] rounded-[10px] bg-white shadow-xl'>
    <img className='w-full' src={blog_img} alt="" />
    <div className='p-[20px]'>
     <Flex className={`items-center justify-between`}>
      <span className='font-semibold font-Urbanist text-[14px] text-white py-[8px] px-[10px] bg-[#4F5DE4] rounded-[10px]'>
      Development
      </span>
      <span className='font-Urbanist font-semibold text-[16px] text-custom_orange'>
      26 Mar, 2023
      </span>
     </Flex>
     <h1 className='font-bold font-Urbanist text-[24px] text-regal-blue w-full md:w-[283px] my-6 text-center md:text-start'>
     The Complete Web Developer Guideline 2023
     </h1>
     <Flex className={`items-center justify-between`}>
        <Flex className={`items-center gap-[10px]`}>
            <img src={round_img} alt="" />
            <div>
                <h2 className='font-Urbanist font-bold text-[16px] text-regal-blue'>Darrell Steward</h2>
                <h4 className='font-Urbanist font-medium text-[14px] text-hash'>Fronted Developer</h4>
            </div>
        </Flex>
        <Link className='w-[40px] h-[40px] rounded-full border border-custom_orange flex items-center justify-center hover:bg-custom_orange group'>
        <FaArrowRightLong size={18} className='transition duration-100 text-hash group-hover:text-white' />
        </Link>
     </Flex>
    </div>
    </div>
  )
}

export default Blog_contenct_H