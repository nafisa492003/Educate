import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Common_title from './Common_title'
import round_pick from '../assets/round_pick.png'
import Testimonial_slid_contenct_H from './Testimonial_slid_contenct_H'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import  './Testimonial_arrow.css'
const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="test-next-arrow">
      <div className='w-[50px] h-[50px] bg-[#F6F6F6] flex justify-center items-center rounded-full' >
      <FaArrowRightLong className="text-custom_orange text-[18px]" />
        
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="test-prev-arrow">
      <div className='w-[50px] h-[50px] bg-[#F6F6F6] flex justify-center items-center rounded-full'>
      <FaArrowLeftLong className="text-custom_orange text-[18px]" />
      </div>
    </div>
  );
};
const Testimonial_H = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const slides = [
    { id: 1, content: <Testimonial_slid_contenct_H/> },
    { id: 2, content: <Testimonial_slid_contenct_H/> },
    { id: 3, content: <Testimonial_slid_contenct_H/> },
    { id: 4, content: <Testimonial_slid_contenct_H/> },
    { id: 5, content: <Testimonial_slid_contenct_H/> },
    { id: 6, content: <Testimonial_slid_contenct_H/> },
    { id: 7, content: <Testimonial_slid_contenct_H/> },
    { id: 8, content: <Testimonial_slid_contenct_H/> },
  ];
  return (
    <section className='my-[120px]'>
    <Container>
        <Flex className={`items-center flex-col justify-center lg:items-start lg:justify-start lg:flex-row gap-5 lg:gap-[494px] mb-10`}>
            <Common_title subtitle={`Testimonial`} title={`What Our Student Feedback`} mainClass={`lg:items-start lg:justify-start`} h1Width={`text-center`}/>
            <Flex className={`items-center gap-4`}>
            <div className='w-[76px] h-[76px] border border-[#E4E4E4] hover:border-custom_orange rounded-full flex items-center justify-center'>
            <img className='w-[62px]' src={round_pick} alt="" />
            </div>
            <div className='w-[76px] h-[76px] border border-[#E4E4E4] hover:border-custom_orange rounded-full flex items-center justify-center'>
            <img className='w-[62px]' src={round_pick} alt="" />
            </div>
            <div className='w-[76px] h-[76px] border border-[#E4E4E4] hover:border-custom_orange rounded-full flex items-center justify-center'>
            <img className='w-[62px]' src={round_pick} alt="" />
            </div>
            </Flex>
        </Flex>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>{slide.content}</div>
          ))}
        </Slider>
    </Container>
    </section>
  )
}

export default Testimonial_H