import React from "react";
import Common_Banner from "../Components/Common_Banner";
import Flex from "../Components/Flex";
import Container from "../Components/Container";
import Common_title from "../Components/Common_title";
import Pricing_table_content from "../Components/Pricing_table_content";

const Pricing_table_P = () => {
  return (
    <section>
      <Common_Banner title={`Pricing Tables`} subtitle={`Pricing Tables`} />
      <Container>
        <Flex className={`items-center justify-center flex-col gap-10 my-20`}>
          <Common_title
            subtitle={`Our Pricing Plan`}
            title={`Select a plan according to
                    your requirements`}
            h1Width={`lg:w-[470px] text-center`}
          />
          <Flex className={`gap-4`}>
            <button className="py-3 px-4 md:px-[30px] bg-[#E4E4E4] rounded-xl font-Urbanist font-semibold text-[16px] text-regal-blue hover:bg-custom_orange hover:text-white transition-all">Monthly</button>
            <button className="py-3 px-4 md:px-[30px] bg-[#E4E4E4] rounded-xl font-Urbanist font-semibold text-[16px] text-regal-blue hover:bg-custom_orange hover:text-white transition-all">Yearly</button>
          </Flex>
          <Flex className={`w-full gap-9 flex-col lg:flex-row items-center`}>
            <Pricing_table_content/>
            <Pricing_table_content/>
            <Pricing_table_content/>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Pricing_table_P;
