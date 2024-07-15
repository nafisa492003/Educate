import React from 'react'
import Common_Banner from '../Components/Common_Banner'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import pick from '../assets/teacger_pick.png'
import { FaFacebookF } from "react-icons/fa6";
import { Progress } from "antd";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Common_btn from '../Components/Common_btn'
import Course_Contenct from './../Components/Course_Contenct';
import Common_title from './../Components/Common_title';
const Teacher_Details_P = () => {
  return (
    <section>
      <Common_Banner title={`Teacher Details`} subtitle={`Teacher Details`}/>
      {/* teacher details part */}
     <Container>
      <Flex className={`items-center gap-[77px] flex-col lg:flex-row`}>
        <div className='w-full lg:w-1/2'>

      <img src={pick} alt="" />
        </div>
     <Flex className={`flex-col gap-[30px] w-full lg:w-1/2`}>
     <div>
      <h1 className='font-Urbanist font-bold text-[32px] text-regal-blue'>Hello, I’m William Ketty</h1>
      <h3 className='font-Urbanist font-normal text-[20px] text-custom_orange'>UI/UX Designer</h3>
     </div>
     <p className='font-Urbanist font-semibold text-[16px] text-hash'>
     There are many variations of passages of Lorem Ipsum avagtilable, but the majority have suffered alteration in some form, by injected hudfdfmour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent pe
     </p>
     <p className='font-Urbanist font-semibold text-[16px] text-hash'>
     Himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolo
     </p>
     <div>
      <h2 className='font-semibold font-Urbanist text-[20px] text-regal-blue'>UI / UX Design</h2>
     <Progress percent={80} status="active" />
     </div>
     <Flex className={`items-center gap-5`}>
      <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#f6f6f6]'>
      <FaFacebookF />
      </div>
      <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#f6f6f6]'>
      <FaLinkedinIn />
      </div>
      <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#f6f6f6]'>
      <FaTwitter />
      </div>
      <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#f6f6f6]'>
      <FaYoutube />
      </div>
     </Flex>
     <Common_btn title={`Get In Touch`}/>
     </Flex>

      </Flex>
     </Container>
      {/* teacher details part */}
      <div className='w-full border border-[#e4e4e4] my-[80px]'></div>
      <Container>
        <Common_title subtitle={`Checkout Now`} title={`My All Courses`}/>
        <Flex className={`items-center gap-[36px] flex-col lg:flex-row my-[80px]`}>
          <Course_Contenct/>
          <Course_Contenct/>
          <Course_Contenct/>
        </Flex>
      </Container>
    </section>
  )
}

export default Teacher_Details_P