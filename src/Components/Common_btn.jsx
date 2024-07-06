import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Flex from './Flex';
import { PiTriangleFill } from "react-icons/pi";
const Common_btn = ({title}) => {
  return (
    <Flex className={`items-center justify-center lg:items-start lg:justify-start`}> 
    <button className='flex items-center gap-2 font-bold font-Urbanist text-[18px] text-white py-5 px-[30px] bg-custom_orange rounded-[10px]'>
    {title}
    <FaArrowRightLong />
    </button>
    </Flex>
  )
}

export default Common_btn