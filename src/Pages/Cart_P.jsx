import React from 'react'
import Common_Banner from './../Components/Common_Banner';
import Flex from '../Components/Flex';
import Container from '../Components/Container';
import cart_img from '../assets/cart_img.png'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import Common_btn from '../Components/Common_btn';
const Cart_P = () => {
  return (
    <section>
      <Common_Banner title={`Cart`} subtitle={`Cart`}/>
      <Container>
       {/*cart header part  */}
      <Flex className={`my-20 justify-between items-center`}>
        <div className='w-full lg:w-4/12'>
        <h3 className='font-Urbanist text-[16px]  md:text-[20px] text-regal-blue font-bold'>Item</h3>
        </div>
        <Flex className={`w-full lg:w-8/12 items-center justify-between gap-5`}>
        <h3 className='font-Urbanist text-[16px]  md:text-[20px] text-regal-blue font-bold'>Price</h3>
        <h3 className='font-Urbanist text-[16px]  md:text-[20px] text-regal-blue font-bold'>Quantity</h3>
        <h3 className='font-Urbanist text-[16px]  md:text-[20px] text-regal-blue font-bold'>Subtotal</h3>
        <h3 className='font-Urbanist text-[20px] text-regal-blue font-bold hidden md:block'>Remove</h3>
        </Flex>
      </Flex>
        {/*cart header part  */}
       {/* cart content part */}
       <Flex className={`items-center justify-between p-5 border-t border-b border-[#E4E4E4] w-full gap-10`}>
        <Flex className={`items-center gap-3 lg:gap-10 w-full lg:w-4/12 flex-col md:flex-row `}>
        <IoMdCloseCircle className='text-[24px] text-hash block md:hidden' />
          <img src={cart_img} alt="cart img" />
          <h3 className='font-Urbanist text-[16px]  md:text-[20px] text-regal-blue font-bold'>Office Chair</h3>
        </Flex>
        <Flex className={`items-center w-full lg:w-8/12 justify-between gap-3 flex-col md:flex-row`}>
          <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$10.33 </h3>
          <Flex
                className={`items-center gap-6 w-[154px] h-[46px] rounded-[10px] border border-[#E4E4E4] px-3`}
              >
                <FaMinus className="text-[14px] text-regal-blue" />
                <div className="w-[2px] h-full bg-[#E4E4E4]"></div>
                <span className="font-semibold font-Urbanist text-[14px] text-regal-blue">
                  2
                </span>
                <div className="w-[2px] h-full bg-[#E4E4E4]"></div>
                <FaPlus className="text-[14px] text-regal-blue" />
              </Flex>
              <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$10.33 </h3>
              <IoClose className='text-[20px] text-regal-blue hidden md:block' />
        </Flex>
       </Flex>
       <Flex className={`items-center justify-between p-5 border-t border-b border-[#E4E4E4] w-full gap-10`}>
        <Flex className={`items-center gap-3 lg:gap-10 w-full lg:w-4/12 flex-col md:flex-row `}>
        <IoMdCloseCircle className='text-[24px] text-hash block md:hidden' />
          <img src={cart_img} alt="cart img" />
          <h3 className='font-Urbanist text-[16px]  md:text-[20px] text-regal-blue font-bold'>Office Chair</h3>
        </Flex>
        <Flex className={`items-center w-full lg:w-8/12 justify-between gap-3 flex-col md:flex-row`}>
          <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$10.33 </h3>
          <Flex
                className={`items-center gap-6 w-[154px] h-[46px] rounded-[10px] border border-[#E4E4E4] px-3`}
              >
                <FaMinus className="text-[14px] text-regal-blue" />
                <div className="w-[2px] h-full bg-[#E4E4E4]"></div>
                <span className="font-semibold font-Urbanist text-[14px] text-regal-blue">
                  2
                </span>
                <div className="w-[2px] h-full bg-[#E4E4E4]"></div>
                <FaPlus className="text-[14px] text-regal-blue" />
              </Flex>
              <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$10.33 </h3>
              <IoClose className='text-[20px] text-regal-blue hidden md:block' />
        </Flex>
       </Flex>
          {/* cart content part */}
          {/* end part */}
           <Flex className={`justify-between gap-10 flex-col lg:flex-row my-20`}>
           <Flex className={`gap-6 flex-col md:flex-row`}>
            <input className='w-full md:w-[303px] py-5 px-6 bg-[#F6F6F6] font-Urbanist text-[20px] text-hash font-normal outline-none h-[56px]' placeholder='Enter coupon code' type="text" />
            <Common_btn title={`Apply Coupon`}/>
            </Flex> 
            <Flex className={`flex-col gap-10`}>
             <Flex className={`items-center gap-20 md:gap-[120px]`}>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>Subtotal</h3>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$20.33 </h3>
              </Flex> 
              <Flex className={`items-center gap-20 md:gap-[120px]`}>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>Shipping</h3>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$20.33 </h3>
              </Flex> 
              <div className='w-[290px] border border-[#E4E4E4]'></div>
              <Flex className={`items-center gap-20 md:gap-[120px]`}>
             <h3 className='font-Urbanist font-bold text-[20px] text-regal-blue'>Total</h3>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$20.33 </h3>
              </Flex> 
              <Flex className={`gap-10 flex-col md:flex-row`}>
               <Common_btn title={`Update`}/>
               <Common_btn title={`Checkout`} to={`/checkout`}/>
              </Flex>
            </Flex>
           </Flex>

          {/* end part */}
        </Container>
    </section>
  )
}

export default Cart_P