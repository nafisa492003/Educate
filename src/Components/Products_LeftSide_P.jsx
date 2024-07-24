import React from 'react'
import Flex from './Flex'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Products_LeftSide_P = () => {
  return (
        <Flex className={`flex-col gap-10 w-full lg:w-3/12`}>
        {/* search part */}
        <div className="relative w-full">
        <input
          className="w-full py-[30px] px-[50px] outline-none bg-custom_orange rounded-[10px] font-Urbanist font-normal text-[16px] text-white placeholder:text-white"
          placeholder="Type Here"
          type="text"
        />
        <IoSearch size={24} className="absolute top-[30px] left-3 text-white" />
      </div>
      {/* search part */}
      {/* price part */}
      <Flex className='w-full p-[30px] bg-white rounded-[10px] flex-col gap-5'>
        <h1 className='font-Urbanist font-bold text-[24px] text-regal-blue'>Price</h1>
        <Flex className={`items-center justify-between`}>
          <span className='font-Urbanist font-semibold text-[16px] text-hash'>$10 - $100</span>
          <button className='font-Urbanist font-semibold text-[16px] text-hash p-4 rounded-lg bg-[#F6F6F6]'>Apply</button>
        </Flex>
        <Link className='font-semibold font-Urbanist text-[18px] p-5 rounded-xl text-white bg-custom_orange'>
        Visit Our Pricing Plan
        </Link>
      </Flex>
       {/* price part */}
        {/* catagories part */}
      <Flex className={`flex-col gap-[30px] w-full p-[30px] bg-white shadow-sm`}>
      <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">
      Categories
        </h2>
        <div className="w-full border border-dashed border-custom_orange"></div>
        <Flex className={`items-center gap-1`}>
        <MdKeyboardDoubleArrowRight size={24} className="text-custom_orange" />
          <span className="font-Urbanist font-semibold text-[20px] text-hash">Web Development</span>  
        </Flex>
        <div className="w-full border border-[#E4E4E4]"></div>
        <Flex className={`items-center gap-1`}>
        <MdKeyboardDoubleArrowRight size={24} className="text-custom_orange" />
          <span className="font-Urbanist font-semibold text-[20px] text-hash">Social Marketing</span>  
        </Flex>
        <div className="w-full border border-[#E4E4E4]"></div>
        <Flex className={`items-center gap-1`}>
        <MdKeyboardDoubleArrowRight size={24} className="text-custom_orange" />
          <span className="font-Urbanist font-semibold text-[20px] text-hash">Technology</span>  
        </Flex>
        <div className="w-full border border-[#E4E4E4]"></div>
        <Flex className={`items-center gap-1`}>
        <MdKeyboardDoubleArrowRight size={24} className="text-custom_orange" />
          <span className="font-Urbanist font-semibold text-[20px] text-hash">Business & Finance</span>  
        </Flex>
        <div className="w-full border border-[#E4E4E4]"></div>
        <Flex className={`items-center gap-1`}>
        <MdKeyboardDoubleArrowRight size={24} className="text-custom_orange" />
          <span className="font-Urbanist font-semibold text-[20px] text-hash">Digital Solution</span>  
        </Flex>
      </Flex>
      {/* catagories part */}
        </Flex>
  )
}

export default Products_LeftSide_P