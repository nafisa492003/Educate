import React from "react";
import Flex from "./Flex";
import { IoSearch } from "react-icons/io5";
import right_img from "../assets/blog_d_right.png";
import { CiClock2 } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
const Blog_D_P_right_side = () => {
  return (
    <Flex className={`flex-col gap-10 w-full lg:w-4/12`}>
      <div className="relative w-full">
        <input
          className="w-full py-[30px] px-[50px] outline-none bg-custom_orange rounded-[10px] font-Urbanist font-normal text-[16px] text-white placeholder:text-white"
          placeholder="Type Here"
          type="text"
        />
        <IoSearch size={24} className="absolute top-[30px] left-3 text-white" />
      </div>
      {/* latest part */}
      <div className="w-full p-[30px] bg-white shadow-sm flex flex-col gap-[30px]">
        <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">
          Latest Post
        </h2>
        <div className="w-full border border-dashed border-custom_orange"></div>
        <Flex className={`items-center gap-5 flex-col md:flex-row`}>
          <img src={right_img} alt="" />
          <Flex className={`flex-col gap-3`}>
            <Flex className={`items-center gap-2`}>
              <CiClock2 size={24} className="text-custom_orange" />
              <span className="font-semibold font-Urbanist text-[16px] text-hash">
                26 Mar, 2023
              </span>
            </Flex>
            <h1 className="font-Urbanist font-bold text-[20px] text-regal-blue w-full lg:w-[240px]">
              The Complete Web Developer Guideline 2023
            </h1>
          </Flex>
        </Flex>
        <div className="w-full border border-[#E4E4E4]"></div>
        <Flex className={`items-center gap-5 flex-col md:flex-row`}>
          <img src={right_img} alt="" />
          <Flex className={`flex-col gap-3`}>
            <Flex className={`items-center gap-2`}>
              <CiClock2 size={24} className="text-custom_orange" />
              <span className="font-semibold font-Urbanist text-[16px] text-hash">
                26 Mar, 2023
              </span>
            </Flex>
            <h1 className="font-Urbanist font-bold text-[20px] text-regal-blue w-full lg:w-[240px]">
              The Complete Web Developer Guideline 2023
            </h1>
          </Flex>
        </Flex>
        <div className="w-full border border-[#E4E4E4]"></div>
        <Flex className={`items-center gap-5 flex-col md:flex-row`}>
          <img src={right_img} alt="" />
          <Flex className={`flex-col gap-3`}>
            <Flex className={`items-center gap-2`}>
              <CiClock2 size={24} className="text-custom_orange" />
              <span className="font-semibold font-Urbanist text-[16px] text-hash">
                26 Mar, 2023
              </span>
            </Flex>
            <h1 className="font-Urbanist font-bold text-[20px] text-regal-blue w-full lg:w-[240px]">
              The Complete Web Developer Guideline 2023
            </h1>
          </Flex>
        </Flex>
      </div>
      {/* latest part */}
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
      {/*tag part  */}
      <Flex className={`flex-col gap-[30px] w-full p-[30px] bg-white shadow-sm`}>
      <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">
      Tags
        </h2>
        <div className="w-full border border-dashed border-custom_orange"></div>
        <Flex className={`flex-wrap gap-4`}>
        <span className='font-Urbanist font-semibold text-[16px] text-hash py-[8px] px-[10px] rounded-[10px] bg-[#F6F6F6]'>Marketing</span>
          <span className='font-Urbanist font-semibold text-[16px] text-hash py-[8px] px-[10px] rounded-[10px] bg-[#F6F6F6]'>Development</span>
          <span className='font-Urbanist font-semibold text-[16px] text-hash py-[8px] px-[10px] rounded-[10px] bg-[#F6F6F6]'>Design</span> 
          <span className='font-Urbanist font-semibold text-[16px] text-hash py-[8px] px-[10px] rounded-[10px] bg-[#F6F6F6]'>Digital</span>  
        </Flex>
      </Flex>
      {/* tag part */}
      {/* Comments part */}
     <Flex className={`flex-col gap-[30px] w-full p-[30px] bg-white shadow-sm`}>
     <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">
     Comments
        </h2>
        <div className="w-full border border-dashed border-custom_orange"></div>
          <Flex className={`items-center gap-2 group`}>
            <div className="w-[48px] h-[48px] rounded-full bg-[#e4e4e4] flex items-center justify-center group-hover:bg-custom_orange">
            <FaRegCommentDots size={24} className="group-hover:text-white" />
            </div>
            <h3 className="font-Urbanist font-semibold text-[16px] text-hash">
            There are many variations of Lorem available Here
            </h3>
          </Flex>
          <Flex className={`items-center gap-2 group`}>
            <div className="w-[48px] h-[48px] rounded-full bg-[#e4e4e4] flex items-center justify-center group-hover:bg-custom_orange">
            <FaRegCommentDots size={24} className="group-hover:text-white" />
            </div>
            <h3 className="font-Urbanist font-semibold text-[16px] text-hash">
            There are many variations of Lorem available Here
            </h3>
          </Flex>
          <Flex className={`items-center gap-2 group`}>
            <div className="w-[48px] h-[48px] rounded-full bg-[#e4e4e4] flex items-center justify-center group-hover:bg-custom_orange">
            <FaRegCommentDots size={24} className="group-hover:text-white" />
            </div>
            <h3 className="font-Urbanist font-semibold text-[16px] text-hash">
            There are many variations of Lorem available Here
            </h3>
          </Flex>
          <Flex className="items-center gap-2 group">
      <div className="w-[48px] h-[48px] rounded-full bg-[#e4e4e4] flex items-center justify-center group-hover:bg-custom_orange">
        <FaRegCommentDots size={24} className="group-hover:text-white" />
      </div>
      <h3 className="font-Urbanist font-semibold text-[16px] text-hash">
        There are many variations of Lorem available Here
      </h3>
    </Flex>
     </Flex>









      {/* Comments */}
      
    </Flex>
  );
};

export default Blog_D_P_right_side;
