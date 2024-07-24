import React from 'react'
import bg from '../assets/Rectangle 32.png'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Flex from './Flex';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
const Team_H_contenct = () => {
  return (
    <div className='w-full md:w-[416px] h-[551px] rounded-full bg-regal-blue relative overflow-hidden group'>
      <div style={{
      backgroundImage:`url(${bg})`,
      backgroundPosition:'center',
      backgroundSize:'cover'
      }}
      className='object-contain w-[76%] md:w-[314px] h-[319px] px-2 md:px-5 py-[10px] absolute left-[50px] group-hover:top-[160px] transition-all duration-150 top-[516px]'
      >
      <div className='w-[50px] h-[50px] rounded-full bg-[#F6F6F6] flex items-center justify-center ml-auto mb-8 mt-[56px]'>
        <Link to="/teacher_details">
      <FaArrowRight size={20} className='text-custom_orange' />
        </Link>
      </div>
      <Flex className={`flex-col items-center justify-center gap-5`}>
        <div>
        <h1 className='font-Urbanist font-bold text-[32px] text-white text-center'>Devon Lane</h1>
            <h4 className='font-Urbanist font-normal text-[20px] text-white text-center'>UI/UX Designer</h4>
        </div>
        <Flex className={`items-center justify-center gap-3 text-white`}>
        <FaFacebook size={30} />
        <FaLinkedin size={30} />
        <IoLogoYoutube size={30} />
        </Flex>
      </Flex>
      </div>
    </div>
  )
}

export default Team_H_contenct