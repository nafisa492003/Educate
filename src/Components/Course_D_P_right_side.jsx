import React from "react";
import Flex from "./Flex";
import { CiClock2 } from "react-icons/ci";
import { FcReadingEbook } from "react-icons/fc";
import { IoPlayCircleOutline } from "react-icons/io5";
import { GiCeilingLight } from "react-icons/gi";
import { HiMiniLanguage } from "react-icons/hi2";
import { Link } from "react-router-dom";
import img from "../assets/blog_d_right.png";
import { Rate } from "antd";
const Course_D_P_right_side = () => {
  return (
    <Flex className={`w-full lg:w-4/12 flex-col gap-10`}>
      {/* Course Features */}
      <Flex className={`flex-col gap-[30px] p-[12px] md:p-[30px] shadow-md`}>
        <h1 className="font-bold font-Urbanist text-[24px] text-regal-blue">
          Course Features
        </h1>
        <div className="w-full border-dashed border-[2px] border-custom_orange"></div>
        <Flex className={`items-center justify-between`}>
          <Flex className={`items-center gap-2`}>
            <CiClock2 />
            <h2 className="font-Urbanist font-medium text-[20px] text-hash">
              Duration:
            </h2>
          </Flex>
          <span className="font-Urbanist font-medium text-[20px] text-regal-blue">
            {" "}
            20 Hours
          </span>
        </Flex>
        <div className="w-full border border-[#e4e4e4]"></div>
        <Flex className={`items-center justify-between`}>
          <Flex className={`items-center gap-2`}>
            <FcReadingEbook />
            <h2 className="font-Urbanist font-medium text-[20px] text-hash">
              Lessons:
            </h2>
          </Flex>
          <span className="font-Urbanist font-medium text-[20px] text-regal-blue">
            {" "}
            15
          </span>
        </Flex>
        <div className="w-full border border-[#e4e4e4]"></div>
        <Flex className={`items-center justify-between`}>
          <Flex className={`items-center gap-2`}>
            <FcReadingEbook />
            <h2 className="font-Urbanist font-medium text-[20px] text-hash">
              Students
            </h2>
          </Flex>
          <span className="font-Urbanist font-medium text-[20px] text-regal-blue">
            max 15
          </span>
        </Flex>
        <div className="w-full border border-[#e4e4e4]"></div>
        <Flex className={`items-center justify-between`}>
          <Flex className={`items-center gap-2`}>
            <IoPlayCircleOutline />
            <h2 className="font-Urbanist font-medium text-[20px] text-hash">
              Videos
            </h2>
          </Flex>
          <span className="font-Urbanist font-medium text-[20px] text-regal-blue">
            {" "}
            10 Hours
          </span>
        </Flex>
        <div className="w-full border border-[#e4e4e4]"></div>
        <Flex className={`items-center justify-between`}>
          <Flex className={`items-center gap-2`}>
            <GiCeilingLight />
            <h2 className="font-Urbanist font-medium text-[20px] text-hash">
              Skill Level
            </h2>
          </Flex>
          <span className="font-Urbanist font-medium text-[20px] text-regal-blue">
            Advanced
          </span>
        </Flex>
        <div className="w-full border border-[#e4e4e4]"></div>
        <Flex className={`items-center justify-between`}>
          <Flex className={`items-center gap-2`}>
            <HiMiniLanguage />
            <h2 className="font-Urbanist font-medium text-[20px] text-hash">
              Language:
            </h2>
          </Flex>
          <span className="font-Urbanist font-medium text-[20px] text-regal-blue">
            English
          </span>
        </Flex>
        <Link className="flex items-center justify-center w-full rounded-[10px] bg-custom_orange font-Urbanist font-semibold text-[18px] text-white py-5">
          Buy This Course
        </Link>
      </Flex>
      {/* latest part */}
      <Flex className={`flex-col gap-[30px] p-[12px] md:p-[30px] shadow-md`}>
        <h1 className="font-bold font-Urbanist text-[24px] text-regal-blue">
          Latest Post
        </h1>
        <div className="w-full border-dashed border-[2px] border-custom_orange"></div>
        <Flex className={`items-center gap-2`}>
          <img src={img} alt="" />
          <Flex className={`flex-col gap-2`}>
            <h4 className="font-Urbanist font-semibold text-[16px] text-hash">
              By <span className="text-custom_orange">Robert Fox</span>
            </h4>
            <h2 className="font-bold font-Urbanist text-[20px] text-regal-blue">
              The Complete Web.....
            </h2>
            <Flex className={`items-center gap-1`}>
              <Rate value={5} className="text-custom_orange" />
              <span className="font-Urbanist font-medium text-[14px] text-regal-blue">
                4.8(30)
              </span>
            </Flex>
          </Flex>
        </Flex>
        <div className="w-full border border-[#e4e4e4]"></div>
        <Flex className={`items-center gap-2`}>
          <img src={img} alt="" />
          <Flex className={`flex-col gap-2`}>
            <h4 className="font-Urbanist font-semibold text-[16px] text-hash">
              By <span className="text-custom_orange">Robert Fox</span>
            </h4>
            <h2 className="font-bold font-Urbanist text-[20px] text-regal-blue">
              The Complete Web.....
            </h2>
            <Flex className={`items-center gap-1`}>
              <Rate value={5} className="text-custom_orange" />
              <span className="font-Urbanist font-medium text-[14px] text-regal-blue">
                4.8(30)
              </span>
            </Flex>
          </Flex>
        </Flex>
        <div className="w-full border border-[#e4e4e4]"></div>
        <Flex className={`items-center gap-2`}>
          <img src={img} alt="" />
          <Flex className={`flex-col gap-2`}>
            <h4 className="font-Urbanist font-semibold text-[16px] text-hash">
              By <span className="text-custom_orange">Robert Fox</span>
            </h4>
            <h2 className="font-bold font-Urbanist text-[20px] text-regal-blue">
              The Complete Web.....
            </h2>
            <Flex className={`items-center gap-1`}>
              <Rate value={5} className="text-custom_orange" />
              <span className="font-Urbanist font-medium text-[14px] text-regal-blue">
                4.8(30)
              </span>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Course_D_P_right_side;
