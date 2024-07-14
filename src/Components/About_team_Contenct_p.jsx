import React from 'react'
import team_contenct_bg from '../assets/about_p_team_contenct_bg.png'
import Flex from './Flex'
import { Rate } from 'antd';
import round_img from '../assets/round_pick.png'
const About_team_Contenct_p = () => {
  return (
    <div style={{
        backgroundImage:`url(${team_contenct_bg})`,
        backgroundSize:'cover'
    }}
    className='object-contain px-5  lg:px-10 pt-10 bg-no-repeat pb-[57px] w-full lg:w-[416px] rounded-[10px]'
    >
    <Flex className={`gap-[35px] flex-col`}>
    <Rate value={5} className='text-custom_orange' />
    <p className='w-full lg:w-[343px] font-Urbanist font-medium text-[18px] text-hash'>Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet</p>
    <Flex className={`items-center gap-[30px]`}>
        <img src={round_img} alt="" />
        <div>
            <h2 className='font-bold font-Urbanist text-[20px] text-regal-blue'>Savannah Nguyen</h2>
            <h4 className='font-Urbanist font-medium text-[12px] text-hash'>UI/UX Designer</h4>
        </div>
    </Flex>
    </Flex>
    </div>
  )
}

export default About_team_Contenct_p