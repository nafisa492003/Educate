import React from "react";
import Container from "./Container";
import Common_title from "./Common_title";
import Flex from "./Flex";
import about_right_img from '../assets/Image.png'
import icon from '../assets/Group_icon.png'
import round_img from '../assets/round_pick.png'
import { FiPhoneCall } from "react-icons/fi";
import Common_btn from './Common_btn';
const AboutH = () => {
  return (
    <section className="my-[80px] lg:my-[120px]">
       <Container>
      <Flex className={`gap-[70px] flex-col lg:flex-row`}>
        {/* ------------------About Left part---------------- */}
        <Flex className={`flex-col gap-6 md:gap-10 w-full lg:w-1/2`}>
        <Common_title
          subtitle={`About Us`}
          title={`Creating a Lifelong Learning Best Community`}
          mainClass={` lg:justify-start lg:items-start`}
          h1Width={`lg:w-[592px] w-full mx-auto text-center lg:mx-0 lg:text-start`}
        />
        <p className="font-Urbanist font-semibold text-[16px] text-hash w-full lg:w-[608px] mx-auto text-center lg:text-start lg:mx-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent </p>
        <Flex className={`w-full lg:w-[642px] items-center gap-6 bg-[#F6F6F6] rounded-[10px] `}>
          <img className="rounded-l-[10px]" src={icon} alt="" />
          <div className="py-2">
            <h2 className="font-Urbanist font-bold text-[20px] text-regal-blue mb-[8px]">Flexible Classes</h2>
            <p className="font-semibold font-Urbanist text-[16px] text-hash w-full md:w-[470px]">
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </Flex>
        <Flex className={`items-center gap-[30px] flex-col md:flex-row`}>
         <Flex className={`items-center gap-4`}>
          <div className="p-[4px] border-[2px] border-custom_orange rounded-full">
          <img src={round_img} alt="" />
          </div>
          <div>
            <h2 className="font-normal font-allison text-[45px] text-regal-blue">Jone Martin</h2>
            <h4 className="font-semibold font-Urbanist text-[16px] text-hash">Jone Martin, CEO </h4>
          </div>
          </Flex> 
          <div className="w-[1px] h-[62px] bg-[#e4e4e4] hidden md:block"></div>
          <Flex className={`items-center gap-4`}>
            <div className="w-[54px] h-[54px] border-[2px] border-[#e4e4e4] rounded-full flex items-center justify-center">
          <FiPhoneCall size={28} className="text-custom_orange" />
            </div>
            <div>
              <h3 className="font-semibold font-Urbanist text-[16px] text-hash">
              Need to Know More Details?
              </h3>
              <h4 className="font-Urbanist font-bold text-[24px] text-blue">+(684) 555-0102</h4>
            </div>
          </Flex>
        </Flex>
        <div className="w-full border border-[#E4E4E4]"></div>
        <Common_btn title={`Discover More`}/>
        </Flex>
          {/* ------------------About Left part---------------- */}
            {/* ------------------About Right part---------------- */}
        <div className="w-full lg:w-1/2">
          <img className="w-full mx-auto" src={about_right_img} alt="" />
        </div>
          {/* ------------------About Right part---------------- */}
      </Flex>
     
      </Container>
    </section>
  );
};

export default AboutH;
