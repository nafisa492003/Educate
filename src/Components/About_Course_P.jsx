import React from 'react'
import Container from './Container'
import Common_title from './Common_title'
import Course_Contenct from './Course_Contenct'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './About_Course_P_Arrows.css'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="aboutp-next-arrow">
      <div className='w-[50px] h-[50px] bg-[#E4E4E4] flex justify-center items-center rounded-[4px] hover:bg-blue group' >
      <FaArrowRightLong className="text-blue text-[18px] group-hover:text-white" />
        
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="aboutp-prev-arrow">
      <div className='w-[50px] h-[50px] bg-[#E4E4E4] flex justify-center items-center rounded-[4px] hover:bg-blue group'>
      <FaArrowLeftLong className="text-blue text-[18px] group-hover:text-white" />
      </div>
    </div>
  );
};
const About_Course_P = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const slides = [
    { id: 1, content:  <Course_Contenct/> },
    { id: 2, content:  <Course_Contenct/> },
    { id: 3, content: <Course_Contenct/> },
    { id: 4, content:  <Course_Contenct/> },
    { id: 5, content:  <Course_Contenct/> },
    { id: 6, content:  <Course_Contenct/> },
    { id: 7, content:  <Course_Contenct/> },
    { id: 8, content:  <Course_Contenct/> },
  ];
  return (
    <section 
    className='my-[80px] md:my-[120px]'
    >
        <Container>
       <Common_title subtitle={`Popular Course`} title={`Featured Course On This Month`}  h1Width={`text-center`}/>
       <div className='mt-40'>
       <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>{slide.content}</div>
          ))}
        </Slider>
       </div>
        </Container>
    </section>
  )
}

export default About_Course_P