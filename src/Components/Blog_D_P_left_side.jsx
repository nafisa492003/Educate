import React from 'react'
import Flex from './Flex'
import left_img from '../assets/blog_d_left.png'
const Blog_D_P_left_side = () => {
  return (
    <Flex className={`gap-10 flex-col w-full lg:w-8/12`}>
    <img src={left_img} alt="" />
    <Flex>
        <span className='font-semibold font-Urbanist text-[14px] text-white py-[7px] px-[10px] bg-blue rounded-[10px]'>Development</span>
    </Flex>
    </Flex>
  )
}

export default Blog_D_P_left_side