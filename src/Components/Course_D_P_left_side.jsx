import React, { useState } from "react";
import Flex from "./Flex";
import left_img from "../assets/blog_d_left.png";
import { IoHeartCircleSharp } from "react-icons/io5";
import round_pick from "../assets/round_pick.png";
import { Rate } from "antd";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdHighlight } from "react-icons/md";
import user_img from '../assets/user_img.png';
import Common_btn from './Common_btn';
const Course_D_P_left_side = () => {
  const [Overview, setOverview] = useState("overview");
  return (
    <Flex className={`flex-col gap-10 w-full lg:w-8/12`}>
      <div className="relative">
        <img src={left_img} alt="" />
        <IoHeartCircleSharp
          size={44}
          className="absolute text-custom_orange top-10 left-10"
        />
      </div>
      <Flex className={`items-center justify-between flex-col md:flex-row`}>
        <Flex className={`items-center gap-2`}>
          <img src={round_pick} alt="" />
          <div>
            <h3 className="font-bold font-Urbanist text-[16px] text-regal-blue">
              Guy Hawkins
            </h3>
            <h4 className="font-Urbanist font-medium text-[12px] text-hash">
              Project Manager
            </h4>
          </div>
        </Flex>
        <Flex className={`items-center gap-2 my-5 md:my-0`}>
          <span className="font-semibold font-Urbanist text-[14px] text-white py-[7px] px-[10px] rounded-[8px] bg-blue">
            Development
          </span>
          <Rate value={5} className="text-custom_orange" />
          <span className="font-normal font-Urbanist text-regal-blue text-[14px]">
            (25 Reviews)
          </span>
        </Flex>
        <div>
          <span className="font-Urbanist font-bold text-[32px] text-custom_orange">
            $473.00
          </span>
        </div>
      </Flex>
      <h1 className="font-Urbanist font-bold text-[32px] text-regal-blue">
        The Complete Web Developer Guideline 2023
      </h1>
      <Flex
        className={`p-[15px] w-full bg-[#F6F6F6] rounded-[14px] items-center gap-5 flex-col md:flex-row`}
      >
        <span
          onClick={() => setOverview("overview")}
          className={`font-semibold font-Urbanist text-[16px]  py-4 px-4  rounded-[8px] cursor-pointer ${
            Overview == "overview"
              ? "bg-custom_orange text-white"
              : " text-regal-blue  bg-white"
          }`}
        >
          Overview
        </span>
        <span
          onClick={() => setOverview("curriculum")}
          className={`font-semibold font-Urbanist text-[16px]  py-4 px-4 rounded-[8px] cursor-pointer
          ${
            Overview == "curriculum"
              ? "bg-custom_orange text-white"
              : " text-regal-blue  bg-white"
          }
          `}
        >
          Curriculum
        </span>
        <span
          onClick={() => setOverview("reviews")}
          className={`font-semibold font-Urbanist text-[16px] py-4 px-4  rounded-[8px] cursor-pointer
           ${
             Overview == "reviews"
               ? "bg-custom_orange text-white"
               : " text-regal-blue  bg-white"
           }
          `}
        >
          Reviews
        </span>
        <span
          onClick={() => setOverview("instructor")}
          className={`font-semibold font-Urbanist text-[16px] py-4 px-4  rounded-[8px] cursor-pointer
           ${
             Overview == "instructor"
               ? "bg-custom_orange text-white"
               : " text-regal-blue  bg-white"
           }
          `}
        >
          Instructor
        </span>
      </Flex>
      {Overview === "overview" ? (
  // overview
  <div className="flex flex-col gap-10">
    <p className="font-semibold font-Urbanist text-[16px] text-hash">
      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
    </p>
    <p className="font-semibold font-Urbanist text-[16px] text-hash">
      Himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolo
    </p>
    <p className="font-semibold font-Urbanist text-[16px] text-hash">
      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
    </p>
    <Flex className={`flex-col gap-4`}>
      <Flex className={`items-center gap-2`}>
        <FaCircleCheck size={24} className="text-custom_orange" />
        <h2 className="font-medium font-Urbanist text-[20px] text-regal-blue">
          Nibh. Nam nec eros id magna hendrerit s
        </h2>
      </Flex>
      <Flex className={`items-center gap-2`}>
        <FaCircleCheck size={24} className="text-custom_orange" />
        <h2 className="font-medium font-Urbanist text-[20px] text-regal-blue">
          Vitae nibh. Nam nec eros id magna hendrerit s
        </h2>
      </Flex>
      <Flex className={`items-center gap-2`}>
        <FaCircleCheck size={24} className="text-custom_orange" />
        <h2 className="font-medium font-Urbanist text-[20px] text-regal-blue">
          Nam nec eros id magna hendrerit s
        </h2>
      </Flex>
    </Flex>
  </div>
) : Overview === "curriculum" ? (
  // curriculum
  <div>
    <h1 className="font-bold font-Urbanist text-[24px] text-regal-blue">
      Starting Beginners Level Course
    </h1>
    <p className="font-semibold font-Urbanist text-[16px] text-hash my-5">
      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
    </p>
    <Flex className={`flex-col gap-[30px] my-10`}>
      <Flex className={`items-start md:items-center justify-between flex-col md:flex-row`}>
        <Flex className={`items-center gap-2 md:gap-5`}>
          <FaRegCirclePlay size={30} className="text-custom_orange"/>
          <h1 className="font-bold font-Urbanist text-[18px] md:text-[26px] text-regal-blue">
            Introduction of Editing
          </h1>
          <span className="font-Urbanist font-semibold text-[18px] text-hash py-2 px-4 rounded-[8px] bg-[#F6F6F6]">Preview</span>
        </Flex>
        <span className="font-semibold font-Urbanist text-[16px] text-hash">10 Minutes</span>
      </Flex>
      <div className="w-full border border-[#E4E4E4]"></div>
      <Flex className={`items-start md:items-center justify-between flex-col md:flex-row`}>
        <Flex className={`items-center gap-2 md:gap-5`}>
          <FaRegCirclePlay size={30} className="text-custom_orange"/>
          <h1 className="font-bold font-Urbanist text-[18px] md:text-[26px] text-regal-blue">
            Overview of Editing
          </h1>
          <span className="font-Urbanist font-semibold text-[18px] text-hash py-2 px-4 rounded-[8px] bg-[#F6F6F6]">Preview</span>
        </Flex>
        <span className="font-semibold font-Urbanist text-[16px] text-hash">10 Minutes</span>
      </Flex>
      <div className="w-full border border-[#E4E4E4]"></div>
      <Flex className={`items-start md:items-center justify-between flex-col md:flex-row`}>
        <Flex className={`items-center gap-2 md:gap-5`}>
          <FaRegFolderOpen  size={30} className="text-custom_orange"/>
          <h1 className="font-bold font-Urbanist text-[18px] md:text-[26px] text-regal-blue">
            Basic Editing Technology
          </h1>
        </Flex>
      </Flex>
      <div className="w-full border border-[#E4E4E4]"></div>
      <Flex className={`items-start md:items-center justify-between flex-col md:flex-row`}>
        <Flex className={`items-center gap-2 md:gap-5`}>
          <MdHighlight  size={30} className="text-custom_orange"/>
          <h1 className="font-bold font-Urbanist text-[18px] md:text-[26px] text-regal-blue">
            Quiz
          </h1>
        </Flex>
        <span className="font-semibold font-Urbanist text-[16px] text-hash">6 Questions</span>
      </Flex>
      <div className="w-full border border-[#E4E4E4]"></div>
    </Flex>
    <h1 className="font-bold font-Urbanist text-[24px] text-regal-blue">
      Intermediate Level Course
    </h1>
    <p className="font-semibold font-Urbanist text-[16px] text-hash my-5">
      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
    </p>
    <Flex className={`flex-col gap-[30px] my-10`}>
      <Flex className={`items-start md:items-center justify-between flex-col md:flex-row`}>
        <Flex className={`items-center gap-2 md:gap-5`}>
          <FaRegCirclePlay size={30} className="text-custom_orange"/>
          <h1 className="font-bold font-Urbanist text-[18px] md:text-[26px] text-regal-blue">
            Overview of Editing
          </h1>
          <span className="font-Urbanist font-semibold text-[18px] text-hash py-2 px-4 rounded-[8px] bg-[#F6F6F6]">Preview</span>
        </Flex>
        <span className="font-semibold font-Urbanist text-[16px] text-hash">10 Minutes</span>
      </Flex>
      <div className="w-full border border-[#E4E4E4]"></div>
      <Flex className={`items-start md:items-center justify-between flex-col md:flex-row`}>
        <Flex className={`items-center gap-2 md:gap-5`}>
          <FaRegFolderOpen  size={30} className="text-custom_orange"/>
          <h1 className="font-bold font-Urbanist text-[18px] md:text-[26px] text-regal-blue">
            Basic Editing Technology
          </h1>
        </Flex>
      </Flex>
      <div className="w-full border border-[#E4E4E4]"></div>
      <Flex className={`items-start md:items-center justify-between flex-col md:flex-row`}>
        <Flex className={`items-center gap-2 md:gap-5`}>
          <MdHighlight  size={30} className="text-custom_orange"/>
          <h1 className="font-bold font-Urbanist text-[18px] md:text-[26px] text-regal-blue">
            Quiz
          </h1>
        </Flex>
        <span className="font-semibold font-Urbanist text-[16px] text-hash">6 Questions</span>
      </Flex>
      <div className="w-full border border-[#E4E4E4]"></div>
    </Flex>
  </div>
) : Overview === "reviews" ? (
  // reviews content
  <Flex className={`flex-col gap-10`}>
   <h1 className="font-bold font-Urbanist text-[24px] text-regal-blue">2 Reviews</h1>
   <Flex className={`items-center gap-5 flex-col md:flex-row`}>
    <img src={user_img} alt="" />
    <div>
      <Flex className={`items-center justify-between mb-4`}>
      <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">David Shon</h2>
    <Rate value={5} className="text-custom_orange" />
      </Flex>
      <p className="font-semibold font-Urbanist text-[16px] text-hash">Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
    </div>
   </Flex>
  <div className="w-full border border-[#e4e4e4]"></div>
  <Flex className={`items-center gap-5 flex-col md:flex-row`}>
    <img src={user_img} alt="" />
    <div>
      <Flex className={`items-center justify-between mb-4`}>
      <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">David Shon</h2>
    <Rate value={5} className="text-custom_orange" />
      </Flex>
      <p className="font-semibold font-Urbanist text-[16px] text-hash">Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
    </div>
   </Flex>
  <div className="w-full border border-[#e4e4e4]"></div>
  <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">Add a Review</h2>
  <Flex className={`items-center gap-2`}>
    <span className="font-semibold font-Urbanist text-[20px] text-hash">Rate this course</span>
    <Rate  className="text-custom_orange" />
  </Flex>
  <Flex className={`items-center gap-5 flex-col lg:flex-row`}>
    <input className="w-full lg:w-[424px] py-6 px-[30px] bg-[#f6f6f6] outline-none text-hash" placeholder="Your Name" type="text" />
    <input className="w-full lg:w-[424px] py-6 px-[30px] bg-[#f6f6f6] outline-none text-hash" placeholder="Email Address" type="text" />
  </Flex>
  <input className="w-full pt-6 pb-[126px] px-[30px] bg-[#f6f6f6] outline-none text-hash" placeholder="Write a Message" type="text" />
  <Common_btn title={`Leave a Review`}/>
  </Flex>
) : Overview === "instructor" ? (
  // instructor content
  <div>
    <Flex className={`items-center gap-5 flex-col md:flex-row`}>
    <img src={user_img} alt="" />
    <div>
      <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">David Shon</h2>
      <h3 className="font-medium font-Urbanist text-[12px] text-hash mb-6">Project Manager</h3>
      <p className="font-semibold font-Urbanist text-[16px] text-hash">Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
    </div>
   </Flex>
  </div>
) : (
  <>
  </>
)}
    </Flex>
  );
};

export default Course_D_P_left_side;
