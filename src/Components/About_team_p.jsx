import React from 'react'
import team_bg from '../assets/about_p_team_bg.png'
import Container from './Container'
import Common_title from './Common_title'
import About_team_Contenct_p from './About_team_Contenct_p'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import './About_team_p_arrows.css'
const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="aboutt-next-arrow">
      <div className='w-[50px] h-[50px] bg-custom_orange flex justify-center items-center rounded-[4px] hover:bg-blue' >
      <FaArrowRightLong className="text-[18px] text-white" />
        
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="aboutt-prev-arrow">
      <div className='w-[50px] h-[50px] bg-custom_orange flex justify-center items-center rounded-[4px] hover:bg-blue'>
      <FaArrowLeftLong className="text-[18px] text-white" />
      </div>
    </div>
  );
};
const About_team_p = () => {
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
    { id: 1, content:  <About_team_Contenct_p/> },
    { id: 2, content:  <About_team_Contenct_p/> },
    { id: 3, content: <About_team_Contenct_p/> },
    { id: 4, content:  <About_team_Contenct_p/> },
    { id: 5, content:  <About_team_Contenct_p/> },
    { id: 6, content:  <About_team_Contenct_p/> },
    { id: 7, content:  <About_team_Contenct_p/> },
    { id: 8, content:  <About_team_Contenct_p/> },
  ];
  return (
   <section style={{
    backgroundImage:`url(${team_bg})`,
   }}
   className='object-contain bg-no-repeat pt-[120px] pb-[200px]'
   >
  <Container>
  <Common_title subtitle={`Our Team`} title={`What Our Student Feedback`} h1Width={`text-center`}/>
  <div className='mt-10 lg:mt-[130px]'>
  <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>{slide.content}</div>
          ))}
        </Slider>
  {/* <About_team_Contenct_p/> */}
  </div>
  </Container>
   </section>
  )
}

export default About_team_p