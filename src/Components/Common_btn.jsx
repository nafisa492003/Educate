import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Flex from './Flex';

const Common_btn = ({ title, to }) => {
  return (
    <Flex className={`items-center justify-center lg:items-start lg:justify-start`}> 
      <Link to={to}>
        <button className='flex items-center gap-2 font-bold font-Urbanist text-[18px] text-white py-5 px-[30px] bg-custom_orange rounded-[10px]'>
          {title}
          <FaArrowRightLong />
        </button>
      </Link>
    </Flex>
  )
}

export default Common_btn;
