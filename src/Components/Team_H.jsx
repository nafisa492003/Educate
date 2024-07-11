import React from "react";
import team_bg from "../assets/Instructor_BG.png";
import Common_title from "./Common_title";
import Container from "./Container";
import Team_H_contenct from "./Team_H_contenct";
import Flex from "./Flex";
const Team_H = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${team_bg})`,
      }}
      className="pt-[80px] md:pt-[120px] pb-[80px] bg-no-repeat border-b border-[#e4e4e4]"
    >
      <Container>
        <Common_title
          subtitle={`Our Team`}
          title={`Meet Our Professional Instructor`}
          h1Width={`lg:w-[395px] text-center`}
        />
        <Flex className={`items-center gap-[36px] flex-col lg:flex-row mt-20`}>
        <Team_H_contenct/>
        <Team_H_contenct/>
        <Team_H_contenct/>
        </Flex>
      </Container>
    </section>
  );
};

export default Team_H;
