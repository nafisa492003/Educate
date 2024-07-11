import React from "react";
import touch_bg from "../assets/GetIntouch_bg.png";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router-dom";
const GetInTouch_H = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${touch_bg})`,
      }}
      className="object-cover py-[38px] bg-no-repeat"
    >
      <Container>
        <Flex className={`items-center justify-between flex-col lg:flex-row`}>
          <div className="w-full md:w-[638px] mb-4 lg:mb-0 text-center lg:text-start">
            <h1 className="font-medium font-Urbanist text-[24px] lg:text-[72px] text-white">
              <span className="font-normal font-WaterBrush text-[26px] lg:text-[90px] text-custom_orange block">
                Get your Quality
              </span> 
              Skills certificate from the 
                <span className="font-bold font-Urbanist text-[24px]  lg:text-[72px] text-custom_orange">
              eduAct
              </span>
            </h1>
          </div>
          <Link className="font-bold font-Urbanist text-[18px] text-white py-4 md:py-[25px] px-6 md:px-[58px] rounded-[15px] bg-custom_orange">
          Get In Tocuch
          </Link>
        </Flex>
      </Container>
    </section>
  );
};

export default GetInTouch_H;
