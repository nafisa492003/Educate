import React from 'react'
import Common_Banner from './../Components/Common_Banner';
import Container from '../Components/Container';
import { Link } from 'react-router-dom';
import Flex from '../Components/Flex';
import Common_btn from './../Components/Common_btn';

const Log_In_P = () => {
  return (
    <section>
        <Common_Banner title={`login`} subtitle={`login`}/>
        <Container>
        <div className='my-40 lg:my-[120px]'>
         <div className='py-6 md:py-10 px-5 md:px-[50px] w-full bg-[#F6F6F6]'>
           <h1 className='font-medium font-Urbanist text-[18px] text-regal-blue'>We have a demo account setup.<span className='font-bold'> Username: demo and Password:</span> <Link className='text-custom_orange'>demo</Link></h1>
         </div>
         <Flex className={`justify-between p-5 lg:p-[60px] w-full flex-col lg:flex-row`}>
          {/* login part */}
          <Flex className={`flex-col gap-10 w-full lg:w-[500px]`}>
            <h1 className='font-Urbanist font-bold text-[32px] text-regal-blue'>Login</h1>
            <input className='w-full font-Urbanist font-semibold text-hash bg-[#F6F6F6] py-6 px-4 md:px-[30px]' placeholder='User Name or  Email Address*' type="text" />
            <input className='w-full font-Urbanist font-semibold text-hash bg-[#F6F6F6] py-6 px-4 md:px-[30px]' placeholder='Password*' type="password" />
            <Flex className={`items-center justify-between`}>
            <Flex className={`items-center gap-1`}>
              <input type="checkbox" />
              <span className='font-semibold font-Urbanist text-[16px] text-hash'>Remember Me?</span>
            </Flex>
            <Link className='font-semibold font-Urbanist text-[16px] text-hash'>Forget Password?</Link>
            </Flex>
            <Common_btn title={`Login`}/>
          </Flex>
            {/* login part */}
          <div className='w-[1px] h-[354px] border-dashed border border-[#b7b0b4] hidden lg:block'></div>
          {/* Register part */}
          <Flex className={`flex-col gap-10 w-full lg:w-[500px] mt-6 lg:mt-0`}>
            <h1 className='font-Urbanist font-bold text-[32px] text-regal-blue'>Register</h1>
            <input className='w-full font-Urbanist font-semibold text-hash bg-[#F6F6F6] py-6 px-4 md:px-[30px]' placeholder='User Name' type="text" />
            <input className='w-full font-Urbanist font-semibold text-hash bg-[#F6F6F6] py-6 px-4 md:px-[30px]' placeholder='Password*' type="password" />
            <Flex className={`items-center gap-1`}>
              <input type="checkbox" />
              <span className='font-semibold font-Urbanist text-[16px] text-hash'>I Accept Company Privacy Policy</span>
            </Flex>
           
            <Common_btn title={`Register`}/>
          </Flex>
           {/* Register part */}
         </Flex>
        </div>

        </Container>
    </section>
  )
}

export default Log_In_P