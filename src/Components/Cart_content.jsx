import React from 'react'
import Flex from './Flex'
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
const Cart_content = () => {
  return (
    <div className='w-full lg:w-[303px] h-[434px] border border-[#e4e4e4] rounded-[15px] hover:shadow-lg flex flex-col justify-end p-6 relative group'>
     <Flex className={`items-center flex-col gap-5 absolute top-5 right-5 hidden group-hover:flex transition-all duration-75 ease-linear`}>
      <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#F6F6F6]'>
      <FaRegHeart size={16} className='text-hash' />
      </div>
      <Link to={`/products_Details`} className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#F6F6F6]'>
      <FaRegEye size={16} className='text-hash' />
      </Link>
     </Flex>
     <Flex className={`flex-col gap-4 items-center`}>
    <h1 className='font-Urbanist font-semibold text-[20px] text-regal-blue'>Sofa Chair</h1>
    <Flex className={`items-center gap-1`}>
      <span className='font-Urbanist font-semibold text-[20px] text-hash'>
      $25.00
      </span>
      <span className='font-Urbanist font-semibold text-[18px] text-hash line-through'>
      $30.00
      </span>
    </Flex>
    <Rate value={5} className='text-custom_orange'/>
   
      <Link to={`/cart`}  className='font-bold font-Urbanist text-[16px] text-hash py-4 px-[32px] bg-[#F6F6F6] rounded-[10px] hover:bg-custom_orange hover:text-white transition duration-100'>
      Add to Cart
    </Link>
     </Flex>
    </div>
  )
}

export default Cart_content