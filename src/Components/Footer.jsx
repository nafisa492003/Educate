import React from "react";
import footer_bg from "../assets/Footer_bg.png";
import footer_logo from "../assets/footerLogo.png";
import Flex from "./Flex";
import Container from "./Container";
import { IoLocation } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import Gallery from '../assets/Gallery.png'
const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footer_bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="object-contain py-[120px] bg-no-repeat"
    >
      <Container>
        <Flex className={` flex-col gap-8 md:flex-row lg:gap-40`}>
            <Flex className={`w-full lg:w-3/12 flex-col gap-[30px] items-start`}>
             <img src={footer_logo} alt="" />
             <Flex className={`items-center gap-4`}>
             <IoLocation size={18} className="text-custom_orange" />
             <span className="font-Urbanist font-normal text-[18px] text-[#B3ADE1]">6391 Elgin St. Celina, Delaware 10299</span>
             </Flex>
             <Flex className={`items-center gap-4`}>
             <LuPhoneCall size={18} className="text-custom_orange" />
             <span className="font-Urbanist font-normal text-[18px] text-[#B3ADE1]">(303) 555-0105</span>
             </Flex>
             <Flex className={`items-center gap-4`}>
             <IoMail size={18} className="text-custom_orange" />
             <span className="font-Urbanist font-normal text-[18px] text-[#B3ADE1]">michael.mitc@example.com</span>
             </Flex>
            </Flex>
            <div className="w-full lg:w-3/12">
              <h2 className="font-semibold font-Urbanist text-[24px] text-white mb-6">Quick Links</h2> 
              <ul>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    Latest Courses
                    </Link>
                </li>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    Mission & Vision
                    </Link>
                </li>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    Our Approach
                    </Link>
                </li>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    Exclusive Advisors
                    </Link>
                </li>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    Join a Carrer
                    </Link>
                </li>
                </ul> 
            </div>
            <div className="w-full lg:w-3/12">
              <h2 className="font-semibold font-Urbanist text-[24px] text-white mb-6">Explore</h2> 
              <ul>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    About Us
                    </Link>
                </li>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    Upcoming Events
                    </Link>
                </li>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    Blog & News
                    </Link>
                </li>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    FAQ Question
                    </Link>
                </li>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    Testimonial
                    </Link>
                </li>
                <li className="font-Urbanist font-normal text-[18px] text-[#B3ADE1] mb-5">
                    <Link>
                    Privacy Policy
                    </Link>
                </li>
                </ul> 
            </div>
            <div className="w-full lg:w-3/12">
              <h2 className="font-semibold font-Urbanist text-[24px] text-white mb-6">Gallery</h2> 
              <img src={Gallery} alt="" />
            </div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
