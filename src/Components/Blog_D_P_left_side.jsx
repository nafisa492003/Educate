import React from 'react'
import Flex from './Flex'
import left_img from '../assets/blog_d_left.png'
import { CiClock2 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import round_pick from '../assets/user_img.png'
import Common_btn from './Common_btn';
const Blog_D_P_left_side = () => {
  return (
    <Flex className={`gap-10 flex-col w-full lg:w-8/12`}>
    <img src={left_img} alt="" />
    <Flex className={`items-center gap-5`}>
        <span className='font-semibold font-Urbanist text-[14px] text-white py-[7px] px-[10px] bg-blue rounded-[10px]'>Development</span>
        <Flex className={`items-center gap-2`}>
        <CiClock2 size={24} className='text-custom_orange'/>
        <span className='font-semibold font-Urbanist text-[16px] text-hash'>26 Mar, 2023</span>
        </Flex>
    </Flex>
       <h1 className='font-bold font-Urbanist text-[32px] text-regal-blue'>The Complete Web Developer Guideline 2023</h1>
       <p className='font-semibold font-Urbanist text-[16px] text-hash w-full lg:w-[850px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor</p>
       <p className='font-semibold font-Urbanist text-[16px] text-hash w-full lg:w-[850px]'>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Mauris gravida lacus metus, ac sagittis tortor hendrerit sit amet. Aenean dictum eget nulla in pharetra. Vestibulum vulputate vehicula mattis. Vivamus dictum nec dui porta rutrum. Nam erat felis, mattis ac massa </p>
       <div className='w-full border border-[#E4E4E4]'></div>
       <Flex className={`items-center justify-between flex-col md:flex-row`}>
        <Flex className={`items-center gap-3 flex-col md:flex-row`}>
          <h4 className='font-Urbanist font-bold text-[24px] text-regal-blue'>Tags</h4>
          <span className='font-Urbanist font-semibold text-[16px] text-hash py-[8px] px-[10px] rounded-[10px] bg-[#F6F6F6]'>Marketing</span>
          <span className='font-Urbanist font-semibold text-[16px] text-hash py-[8px] px-[10px] rounded-[10px] bg-[#F6F6F6]'>Development</span>
          <span className='font-Urbanist font-semibold text-[16px] text-hash py-[8px] px-[10px] rounded-[10px] bg-[#F6F6F6]'>Design</span>
        </Flex>
        <Flex className={`items-center gap-5 mt-6 lg:mt-0`}>
        <FaFacebook size={30} />
        <FaLinkedinIn size={30} />
        <FaTwitter size={30} />
        <FaYoutube size={30} />
        </Flex>
       </Flex>
       <div className='w-full border border-[#E4E4E4]'></div>
       {/* comment section */}
       <h2 className='font-Urbanist font-bold text-[24px] text-regal-blue'>2 Comments</h2>
       <Flex className={`items-center gap-[30px] flex-col md:flex-row`}>
        <img src={round_pick} alt="" />
        <Flex className={`flex-col gap-5`}>
          <h2 className='font-bold font-Urbanist text-[24px] text-regal-blue'>David Shon</h2>
          <p className=' font-Urbanist font-semibold text-[16px] text-hash w-full lg:w-[630px]'>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
          <button className='font-bold font-Urbanist text-[16px] text-hash py-[10px] px-[22px] bg-[#F6F6F6] rounded-[5px] w-[88px]'>Reply</button>
        </Flex>
       </Flex>
        {/* comment section */}
        <div className='w-full border border-[#E4E4E4]'></div>
         {/* comment section */}
       <Flex className={`items-center gap-[30px] flex-col md:flex-row`}>
        <img src={round_pick} alt="" />
        <Flex className={`flex-col gap-5`}>
          <h2 className='font-bold font-Urbanist text-[24px] text-regal-blue'></h2>
          <p className=' font-Urbanist font-semibold text-[16px] text-hash w-full lg:w-[630px]'>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
          <button className='font-bold font-Urbanist text-[16px] text-hash py-[10px] px-[22px] bg-[#F6F6F6] rounded-[5px] w-[88px]'>Reply</button>
        </Flex>
       </Flex>
        {/* comment section */}
        <div className='w-full border border-[#E4E4E4]'></div>
        <h2 className='font-bold font-Urbanist text-[24px] text-regal-blue'>Leave a Comment</h2>
        {/* input section */}
        <Flex className={`items-center gap-5 flex-col lg:flex-row`}>
          <input className='w-full lg:w-[424px] py-6 px-5 bg-[#F6F6F6] font-Urbanist font-normal text-[16px] text-hash outline-none' placeholder='Your Name' type="text" />
          <input className='w-full lg:w-[424px] py-6 px-5 bg-[#F6F6F6] font-Urbanist font-normal text-[16px] text-hash outline-none' placeholder='Email Address' type="text" />
        </Flex>
           <input className='font-normal font-Urbanist text-[16px] text-hash outline-none pt-6 px-5 w-full pb-20 md:pb-[176px] bg-[#F6F6F6]' placeholder='Write a Message' type="text" />
         {/* input section */}
         <Common_btn title={`Submit Comment`}/>
    </Flex>
  )
}

export default Blog_D_P_left_side