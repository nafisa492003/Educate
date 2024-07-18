import React, { useState } from "react";
import Common_Banner from "./../Components/Common_Banner";
import Common_title from "./../Components/Common_title";
import Flex from "../Components/Flex";
import Container from "../Components/Container";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
const FAQ_P = () => {
  const [ans, setAns] = useState(true);
  return (
    <section>
      <Common_Banner subtitle={`FAQs`} title={`FAQs`} />
      <Container>
        <div className="my-[80px] lg:my-[120px]">
          <Common_title
            subtitle={`Our Recent FAQS`}
            title={`Frequently asked Question &
          Answers Here`}
            h1Width={`lg:w-[514px] text-center`}
          />
          <Flex className={`flex-col gap-6 my-10`}>
            <div className="p-3  border border-[#e4e4e4] lg:p-10">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-Urbanist font-semibold text-[16px] text-regal-blue">
                  What Happens to my data if I cancel?
                </h1>
                <FaPlus size={24} className="text-regal-blue" />
              </Flex>
            </div>
            <div className="p-3  border border-[#e4e4e4] lg:p-10">
              <Flex className={`items-center justify-between`}>
                <h1 className={`font-Urbanist font-semibold text-[16px] ${ ans ? "text-custom_orange" : "text-regal-blue"}`}>
                  What Happens to my data if I cancel?
                </h1>
                {ans ? (
                  <FaMinus onClick={()=>setAns(!ans)} size={24} className={`${ans ? "text-custom_orange" : "text-regal-blue"}`} />
                ) : (
                  <FaPlus onClick={()=>setAns(!ans)} size={24} className={`${ans ? "text-custom_orange" : "text-regal-blue"}`} />
                )}
              </Flex>
              {ans && 
              <div className="mt-10">
                <p className="font-Urbanist font-semibold text-[16px] text-hash">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
              </div>
              }
            </div>
            <div className="p-3  border border-[#e4e4e4] lg:p-10">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-Urbanist font-semibold text-[16px] text-regal-blue">
                  What Happens to my data if I cancel?
                </h1>
                <FaPlus size={24} className="text-regal-blue" />
              </Flex>
            </div>
            <div className="p-3  border border-[#e4e4e4] lg:p-10">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-Urbanist font-semibold text-[16px] text-regal-blue">
                  What Happens to my data if I cancel?
                </h1>
                <FaPlus size={24} className="text-regal-blue" />
              </Flex>
            </div>
            <div className="p-3  border border-[#e4e4e4] lg:p-10">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-Urbanist font-semibold text-[16px] text-regal-blue">
                  What Happens to my data if I cancel?
                </h1>
                <FaPlus size={24} className="text-regal-blue" />
              </Flex>
            </div>
            <div className="p-3  border border-[#e4e4e4] lg:p-10">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-Urbanist font-semibold text-[16px] text-regal-blue">
                  What Happens to my data if I cancel?
                </h1>
                <FaPlus size={24} className="text-regal-blue" />
              </Flex>
            </div>
          </Flex>
        </div>
        <div className="w-full py-10 my-10 rounded bg-blue-[10px] flex flex-col items-center justify-between bg-blue">
            <div className="w-[50px] h-[50px]  rounded-full bg-white flex items-center justify-center">
            <FiPhoneCall size={24} className="text-custom_orange" />
            </div>
            <h1 className="text-white text-[24px] md:text-[40px] font-Urbanist font-semibold ">Do you still have question?</h1>
            <div className="w-full lg:w-[525px] border border-custom_orange my-4"></div>
            <h3 className="font-Urbanist font-semibold text-white text-[16px]">Call Anytime</h3>
            <h3 className="font-Urbanist font-bold text-white text-[24px]">(303) 555-0105</h3>
        </div>
      </Container>
    </section>
  );
};

export default FAQ_P;
