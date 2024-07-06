import React from "react";
import service_bg from "../assets/ServiceH_Bg.png";
import Container from "./Container";
import Flex from "./Flex";
import Common_title from "./Common_title";
const ServiceH = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${service_bg})`,
      }}
      className="object-cover py-[120px]"
    >
      <Container>
        {/* title part */}
        <Flex className={`items-center gap-5 lg:gap-40 flex-col lg:flex-row`}>
          <Common_title
            subtitle={`Our Service`}
            title={`Creating a Lifelong Learning Best Community `}
            h1Width={`lg:w-[595px] w-full mx-auto text-center lg:mx-0 lg:text-start`}
            mainClass={`lg:justify-start lg:items-start`}
          />
            <p className="font-semibold font-Urbanist text-[16px] text-regal-blue leading-[32px] w-full mx-auto lg:w-[612px] py-5 border-t border-custom_orange">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </Flex>
        {/* title part */}
        
      </Container>
    </section>
  );
};

export default ServiceH;
