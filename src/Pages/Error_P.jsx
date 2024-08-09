import React from 'react'
import Common_Banner from '../Components/Common_Banner'
import Flex from '../Components/Flex'
import Container from '../Components/Container'
import error_img from '../assets/error.png'
import Common_btn from './../Components/Common_btn';
const Error_P = () => {
  return (
    <section>
        <Common_Banner title={`404 Error`} subtitle={`404 Error`}/>
     <Container>
        <Flex className={`items-center justify-center gap-10 my-20 flex-col`}>
         <img src={error_img} alt="error" />
         <h1 className="font-bold font-Urbanist text-[26px] md:text-[40px] text-regal-blue text-center">Oops! Page not Found</h1>
         <p className='font-Urbanist font-semibold text-[16px] text-hash'>The page you are looking for is not exist.</p>
         <Common_btn to={`/`} title={`Back to Home`}/>
        </Flex>

     </Container>
    </section>
  )
}

export default Error_P