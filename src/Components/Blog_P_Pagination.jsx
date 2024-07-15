import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blog_P_content from './Blog_P_content';
import Container from './Container';
const Blog_P_Pagination = () => {
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
            { id: 1, content: <Blog_P_content /> },
            { id: 2, content: <Blog_P_content /> },
            { id: 3, content: <Blog_P_content /> },
            { id: 4, content: <Blog_P_content /> },
            { id: 5, content: <Blog_P_content /> },
          ];
  return (
    <section className="my-[80px] lg:my-[120px]">
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

export default Blog_P_Pagination