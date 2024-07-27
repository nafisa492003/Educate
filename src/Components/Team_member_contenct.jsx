import React from 'react'
import Flex from './Flex'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Team_member_contenct = () => {
  return (
    <div className='relative mx-auto group'>
      <Link to='/teacher_details'>
    <div className='w-[310px] md:w-[352px] h-[410px] md:h-[513px] rounded-full bg-regal-blue relative overflow-hidden group'>
      <div className='w-[310px] md:w-[352px] h-[410px] md:h-[513px] rounded-full flex flex-col gap-5 items-center justify-center bg-[#181e28] absolute top-[524px] group-hover:top-0 transition-all duration-100'>
      <div>
        <h1 className='font-bold font-Urbanist text-[32px] text-white'>Devon Lane</h1>
        <h3 className='font-normal font-Urbanist text-[20px] text-white text-center'>UI/UX Designer</h3>
      </div>
      <Flex className={`items-center gap-3`}>
       <div className='w-[40px] h-[40px] rounded-full border-[2px] border-blue flex items-center justify-center text-white'>
       <FaFacebookF />
       </div>
       <div className='w-[40px] h-[40px] rounded-full border-[2px] border-blue flex items-center justify-center text-white'>
       <FaLinkedinIn />
       </div>
       <div className='w-[40px] h-[40px] rounded-full border-[2px] border-blue flex items-center justify-center text-white'>
       <FaYoutube />
       </div>
      </Flex>
      </div>
    </div>
    <div className='w-[416px] h-[309px] rounded-b-full bg-custom_orange translate-y-[-265px] translate-x-[-32px] -z-10 absolute group-hover:bg-blue hidden md:block'>
    </div>
    </Link>   
    </div>
  )
}

export default Team_member_contenct