import React from 'react'
import Flex from './Flex'

import { FaPlus } from "react-icons/fa6";
const ServiceList_H = ({title , Icon}) => {
  return (
    <div className='w-full md:w-[304px] pt-[40px] bg-white shadow-lg rounded-[10px] hover:bg-[#342f5c] transition duration-150 group'>
      <Flex className={`flex-col items-center justify-center gap-6`}>
      <Icon size={68} className='text-custom_orange' />
      <h1 className='font-bold font-Urbanist text-[20px] text-regal-blue group-hover:text-white transition duration-150'>{title}</h1>
      <p className='w-full md:w-[215px] text-center font-Urbanist font-medium text-[16px] text-hash group-hover:text-white transition duration-150'>
      Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit 
      </p>
      </Flex>
      <div className='w-full border border-[#E4E4E4] mt-10 group-hover:border-blue'></div>
      <button className='w-[88px] h-[64px] bg-[#F6F6F6] flex items-center justify-center mx-auto group-hover:bg-blue'>
      <FaPlus size={24} className='text-regal-blue group-hover:text-white' />
      </button>
    </div>
  )
}

export default ServiceList_H