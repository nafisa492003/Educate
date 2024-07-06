import React from 'react'
import Flex from './Flex'
import { IoIosArrowForward } from "react-icons/io";
const Common_title = ({subtitle,title , mainClass ,h1Width}) => {
  return (
   <Flex className={`flex-col items-center justify-center ${mainClass}`}>
    <Flex className={`items-center gap-1`}>
     <h4 className='font-bold font-Urbanist text-[24px] text-[#4F5DE4]'>{subtitle}</h4>
     <IoIosArrowForward size={20} className='text-custom_orange' />
     <IoIosArrowForward size={20} className='text-custom_orange' />
     <IoIosArrowForward size={20} className='text-custom_orange' />
     <IoIosArrowForward size={20} className='text-custom_orange' />
    </Flex>
    <h1 className={`font-bold font-Urbanist text-[30px] md:text-[40px] w-full mx-auto text-center lg:mx-0 lg:text-start ${h1Width}`}>{title}</h1>
   </Flex>
  )
}

export default Common_title