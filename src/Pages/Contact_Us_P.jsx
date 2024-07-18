import React from "react";
import Common_Banner from "./../Components/Common_Banner";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Common_title from "./../Components/Common_title";
import Common_btn from "./../Components/Common_btn";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMailOpen } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
const Contact_Us_P = () => {
  return (
    <section>
      <Common_Banner title={`Contact Us`} subtitle={`Contact Us`} />
      <Container>
        <Flex
          className={`items-center justify-center gap-6 my-[80px] lg:my-[120px] flex-col`}
        >
          <Common_title
            title={`Feel free to write us anytime`}
            subtitle={`Contact with  Us`}
            h1Width={`text-center`}
          />
          <Flex className={`items-center justify-center gap-5 flex-col lg:flex-row w-full`}>
            <input
              className="w-full lg:w-[424px] py-6 px-3 lg:px-[30px] bg-[#F6F6F6] font-Urbanist font-medium text-[16px] text-hash outline-none"
              placeholder="Your Name"
              type="text"
            />
            <input
              className="w-full lg:w-[424px] py-6 px-3 lg:px-[30px] bg-[#F6F6F6] font-Urbanist font-medium text-[16px] text-hash outline-none"
              placeholder="Email Address"
              type="text"
            />
          </Flex>
          <Flex className={`items-center justify-center gap-5 flex-col lg:flex-row w-full`}>
            <input
              className="w-full lg:w-[424px] py-6 px-3 lg:px-[30px] bg-[#F6F6F6] font-Urbanist font-medium text-[16px] text-hash outline-none"
              placeholder="Phone"
              type="text"
            />
            <input
              className="w-full lg:w-[424px] py-6 px-3 lg:px-[30px] bg-[#F6F6F6] font-Urbanist font-medium text-[16px] text-hash outline-none"
              placeholder="Subject"
              type="text"
            />
          </Flex>
          <input
            className="w-full lg:w-[868px] pt-6 px-3 lg:px-[30px] pb-[170px] bg-[#F6F6F6] font-Urbanist font-medium text-[16px] text-hash outline-none"
            placeholder="Write a Message"
            type="text"
          />
          <Common_btn title={`Send a Message`} />
        </Flex>
        <Flex className={`my-[80px] lg:my-[120px] flex-col lg:flex-row items-center justify-center`}>
          <Link>
            <Flex
              className={`w-full md:w-[400px] flex-col items-center justify-center gap-3 group hover:bg-blue py-10`}
            >
            <FaQuestion size={45} className="text-blue group-hover:text-white"/>
            <h3 className="font-medium font-Urbanist text-[20px] text-hash group-hover:text-white">Have any question?</h3>
            <h3 className="font-bold font-Urbanist text-[24px] text-regal-blue group-hover:text-white">Free + 23 (000)-8050</h3>
            </Flex>
          </Link>
          <Flex
              className={`w-full md:w-[400px] flex-col items-center justify-center gap-3 group hover:bg-blue py-10`}
            >
            <IoMailOpen size={45} className="text-blue group-hover:text-white"/>
            <h3 className="font-medium font-Urbanist text-[20px] text-hash group-hover:text-white">Send Email</h3>
            <h3 className="font-bold font-Urbanist text-[24px] text-regal-blue group-hover:text-white">Demo@gmail.com</h3>
            </Flex>
            <Flex
              className={`w-full md:w-[400px] flex-col items-center justify-center gap-3 group hover:bg-blue py-10`}
            >
            <IoLocationOutline size={45} className="text-blue group-hover:text-white"/>
            <h3 className="font-medium font-Urbanist text-[20px] text-hash group-hover:text-white">Visit Anytime</h3>
            <h3 className="font-bold font-Urbanist text-[24px] text-regal-blue group-hover:text-white">6391 Elgin St. Delaware 10299</h3>
            </Flex>
        </Flex>
      </Container>
        <div className="w-full mt-20">
        <iframe className="w-full h-[772px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.056023018052!2d90.40259147479073!3d23.709693340338937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b903793475e1%3A0x7a3b32d67a0328f4!2sGol%20Talab!5e0!3m2!1sen!2sbd!4v1721284590730!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  );
};

export default Contact_Us_P;
