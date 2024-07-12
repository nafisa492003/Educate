import React from "react";
import Container from "./Container";
import about_us_img from "../assets/about_us.png";
import Flex from "./Flex";
import Common_title from './Common_title';
import { TbTargetArrow } from "react-icons/tb";
import { GiCeilingLight } from "react-icons/gi";
const About_Us_P = () => {
  return (
    <section className="my-[80px] md:my-[120px]">
      <Container>
        <Flex className={`gap-[65px]`}>
          <div className="w-full lg:w-1/2">
          <img src={about_us_img} alt="" />
          </div>
          <div className="w-full lg:w-1/2">
          <Common_title subtitle={`About Us`} title={`Establishing a community that encourages lifelong learning`} mainClass={`lg:justify-start lg:items-start`} h1Width={`text-center lg:text-start`}/>
          <p className="font-semibold font-Urbanist text-[16px] text-hash my-5 lg:my-10">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition</p>
          <Flex className={`items-center gap-4 md:gap-[30px]`}>
          <TbTargetArrow size={50} className="text-blue" />
          <h3 className="font-Urbanist font-bold text-[32px] text-regal-blue">Our Mission</h3>
          </Flex>
          <p className="font-semibold font-Urbanist text-[16px] text-hash my-5 lg:my-6 w-full lg:w-[642px]">
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition
          </p>
          <Flex className={`items-center gap-4 md:gap-[30px]`}>
          <GiCeilingLight size={50} className="text-blue" />
          <h3 className="font-Urbanist font-bold text-[32px] text-regal-blue">Our Vision</h3>
          </Flex>
          <p className="font-semibold font-Urbanist text-[16px] text-hash my-5 lg:my-6 w-full lg:w-[642px]">
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition
          </p>
          </div>
          
        </Flex>
      </Container>
    </section>
  );
};

export default About_Us_P;
