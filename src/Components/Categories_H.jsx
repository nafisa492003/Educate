import React from "react";
import Container from "./Container";
import categories_bg from "../assets/Categories_bg.png";
import Common_title from "./Common_title";
import Flex from "./Flex";
import { MdWorkHistory } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { LiaConnectdevelop } from "react-icons/lia";
import { MdDraw } from "react-icons/md";
const Categories_H = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${categories_bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="object-contain py-[120px] bg-no-repeat"
    >
      <Container>
        <Common_title
          subtitle={`Our Categories`}
          title={`Favorite Topics To Learn`}
        />
        <Flex className={`mt-[82px] flex-col lg:flex-row gap-[30px]`}>
          <Flex
            className={`flex-col items-center justify-center gap-[4px] w-[78%] md:w-[300px] py-[56px] bg-regal-blue rounded-l-[10px] mx-auto`}
          >
            <MdWorkHistory size={60} className="text-custom_orange" />
            <h1 className="text-white w-[148px] font-Urbanist font-bold text-[24px] text-center">
              Business Management
            </h1>
          </Flex>
          <Flex
            className={`flex-col items-center justify-center gap-[4px] w-[78%] md:w-[300px] py-[56px] bg-regal-blue  mx-auto`}
          >
            <FaComputer size={60} className="text-custom_orange" />
            <h1 className="text-white w-[108px] font-Urbanist font-bold text-[24px] text-center">
              Computer Science
            </h1>
          </Flex>
          <Flex
            className={`flex-col items-center justify-center gap-[4px] w-[78%] md:w-[300px] py-[56px] bg-regal-blue mx-auto`}
          >
            <LiaConnectdevelop size={60} className="text-custom_orange" />
            <h1 className="text-white w-[144px] font-Urbanist font-bold text-[24px] text-center">
              Personal Development
            </h1>
          </Flex>
          <Flex
            className={`flex-col items-center justify-center gap-[4px] w-[78%] md:w-[300px] py-[56px] bg-regal-blue rounded-r-[10px] mx-auto`}
          >
            <MdDraw size={60} className="text-custom_orange" />
            <h1 className="text-white w-[98px] font-Urbanist font-bold text-[24px] text-center">
              Arts and Design
            </h1>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Categories_H;
