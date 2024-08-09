import React from 'react'
import Flex from './Flex'
import { RiCheckboxCircleFill } from "react-icons/ri";
import Common_btn from './Common_btn';
const Pricing_table_content = () => {
  return (
    <div className='w-full md:w-[416px] py-11 flex flex-col justify-center items-center gap-10 relative group rounded-xl shadow-lg overflow-hidden'>
        <div className='w-full md:w-[509px] h-[509px] rounded-full bg-[#F6F6F6] group-hover:bg-custom_orange absolute -z-10 top-[-334px]'></div>
      <div>
     <h1 className='font-Urbanist font-medium text-[24px] group-hover:text-white'>
     Website Design
     </h1>
     <h2 className='font-bold font-Urbanist text-[40px] text-regal-blue text-center group-hover:text-white'>$325</h2>
      </div>
     <Flex className={`items-center justify-center flex-col gap-4`}>
     <h1 className='font-Urbanist font-medium text-[24px]'>
     All Services include:
     </h1>
     <Flex className={`items-center gap-2`}>
     <RiCheckboxCircleFill size={24} className='text-custom_orange'/>
     <span className='font-Urbanist font-medium text-[20px] text-regal-blue'>10 Days Time</span>
     </Flex>
     <Flex className={`items-center gap-2`}>
     <RiCheckboxCircleFill size={24} className='text-custom_orange'/>
     <span className='font-Urbanist font-medium text-[20px] text-regal-blue'>Interview Training</span>
     </Flex>
     <Flex className={`items-center gap-2`}>
     <RiCheckboxCircleFill size={24} className='text-custom_orange'/>
     <span className='font-Urbanist font-medium text-[20px] text-regal-blue'>Gurantee Approval</span>
     </Flex>
     <Flex className={`items-center gap-2`}>
     <RiCheckboxCircleFill size={24} className='text-custom_orange'/>
     <span className='font-Urbanist font-medium text-[20px] text-regal-blue'>Documents Submissioni</span>
     </Flex>
     </Flex>
    <div className='w-full border border-[#E4E4E4]'></div>
    <Common_btn title={`Apply Now`}/>
    </div>
  )
}

export default Pricing_table_content