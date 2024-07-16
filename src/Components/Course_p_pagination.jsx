import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from './Container';
import Course_P_content from './Course_P_content';
const Course_p_pagination = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
          <div
            style={{  
              borderRadius: "10px",
              padding: "15px",
            }}
          >
           <ul style={{ 
          margin: "0px", 
          display: "flex", 
          gap: "10px",
          alignItems:'center',
          justifyContent:'center'
        }}> 
          {dots} 
        </ul>
      </div>
    ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              color: "#2A254D",
              border: "1px #E4E4E4 solid",
              fontSize:'20px',
            }}
          >
            {i + 1}
          </div>
        )};
        const slides = [
            { id: 1, content: <Course_P_content /> },
            { id: 2, content: <Course_P_content /> },
            { id: 3, content: <Course_P_content /> },
            { id: 4, content: <Course_P_content /> },
            { id: 5, content: <Course_P_content /> },
          ];
  return (
    <section className='my-[120px]'>
      <Container>
       <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>{slide.content}</div>
          ))}
        </Slider>

        </Container>
    </section>
  )
}

export default Course_p_pagination