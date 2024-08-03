import React from 'react'
import Common_Banner from './../Components/Common_Banner';
import Flex from '../Components/Flex';
import product_img from '../assets/products_d.png'
import Container from '../Components/Container';
import { Rate } from 'antd';
const Products_Details_P = () => {
  return (
   <section>
    <Common_Banner title={`Product Details`} subtitle={`Product Details`}/>
    <Container>
        {/* product part */}
    <Flex className={`gap-[60px] flex-col lg:flex-row my-[80px]`}>
     <div className='w-full lg:w-6/12'>
      <img src={product_img} alt="" />
     </div>
     <Flex className={`flex-col gap-10 w-full lg:w-6/12`}>
       <Flex className={`gap-5 md:gap-20 items-center`}>
        <h1 className='font-bold font-Urbanist text-[32px] text-regal-blue'>
        Boss Sofa
        </h1>
        <h3 className='font-bold font-Urbanist text-[20px] text-custom_orange'>
        $10.33 
        </h3>
        </Flex> 
        <Flex className={`items-center gap-5`}>
        <Rate value={5} className='text-custom_orange' />
        <h3 className='font-semibold font-Urbanist text-[20px] text-hash'>
        2 Customer Review
        </h3>
        </Flex>
        <div className='w-full border border-[#E4E4E4]'></div>
     <p className='font-Urbanist font-semibold text-[16px] text-hash leading-8 w-full lg:w-[530px]'>
     Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. 
     </p>
     </Flex>
    </Flex>
        {/*product part  */}
    </Container>
   </section>
  )
}

export default Products_Details_P