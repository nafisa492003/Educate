import React from "react";
import banner_bg from "../assets/Banner.png";
import Container from "./Container";
import Common_btn from "./Common_btn";
import banner_right_img from '../assets/Banner_right.png'
const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${banner_bg})`,
      }}
      className="py-[80px]  lg:py-[175px] object-cover bg-no-repeat relative"
    >
      <Container>
        <h1 className="font-bold font-Urbanist text-regal-blue text-[50px] md:text-[60px] w-full text-center lg:text-left lg:w-[530px] mx-auto lg:mx-0">
          <span className="font-normal font-WaterBrush text-custom_orange text-[80px] md:text-[107px]">
            Welcome
          </span>
           to the beginning of our journey learning
        </h1>
        <p className="font-Urbanist font-normal text-[20px] text-regal-blue w-full lg:w-[491px] text-center lg:text-left mx-auto lg:mx-0 my-6">
        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
        </p>
        <Common_btn title={`Find the Course`} to='/course'/>
        <img className="absolute right-[160px] top-[-5px] hidden lg:block" src={banner_right_img} alt="" />
      </Container>
    </section>
  );
};

export default Banner;
