import React from "react";
import Common_Banner from "./../Components/Common_Banner";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import { Link } from "react-router-dom";
import { IoMdCheckbox } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import Common_btn from './../Components/Common_btn';
const Checkout_P = () => {
  return (
    <section>
      <Common_Banner title={`Checkout`} subtitle={`Checkout`} />
      <Container>
        <Flex className={`gap-10 my-10 flex-col lg:flex-row`}>
          {/* left side */}
          <Flex className={`w-full lg:w-6/12 flex-col gap-8`}>
            <div className="py-10 rounded-lg px-4 md:px-14 bg-[#F6F6F6] w-full">
              <span className="font-medium font-Urbanist text-[18px] text-regal-blue">
                Have a coupon? <Link className="text-custom_orange"> Click here to enter your code</Link>
              </span>
            </div>
            <h1 className="font-bold font-Urbanist text-[32px] text-regal-blue">Billing Details</h1>
            <from>
                <Flex className={`gap-5 flex-col md:flex-row my-5`}>
                    <input className="w-full px-4 py-6 lg:w-1/2 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px]" placeholder="Frist Name" type="text" />
                    <input className="w-full px-4 py-6 lg:w-1/2 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px]" placeholder="Last Name" type="text" />
                </Flex>
                <Flex className={`gap-5 flex-col md:flex-row my-5`}>
                    <input className="w-full px-4 py-6 lg:w-1/2 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px]" placeholder="Email Address" type="text" />
                    <input className="w-full px-4 py-6 lg:w-1/2 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px]" placeholder="Phone Number" type="text" />
                </Flex>
                <input className="w-full px-4 py-6 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px] my-5" placeholder="Company" type="text" />
                <input className="w-full px-4 py-6 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px] my-5" placeholder="Address" type="text" />
                <input className="w-full px-4 py-6 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px] my-5" placeholder="Apartment, Unit, etc(optional)" type="text" />
                <Flex className={`gap-5 flex-col md:flex-row my-5`}>
                    <input className="w-full px-4 py-6 lg:w-1/2 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px]" placeholder="Town/City" type="text" />
                    <input className="w-full px-4 py-6 lg:w-1/2 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px]" placeholder="State" type="text" />
                </Flex>
                <Flex className={`gap-5 flex-col md:flex-row mb-5`}>
                    <input className="w-full px-4 py-6 lg:w-1/2 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px]" placeholder="Zip code" type="text" />
                    <input className="w-full px-4 py-6 lg:w-1/2 bg-[#f6f6f6] font-Urbanist font-semibold text-[16px] text-hash rounded-[10px]" placeholder="Country" type="text" />
                </Flex>
            </from>
            <h1 className="font-bold font-Urbanist text-[32px] text-regal-blue">Shipping Details</h1>
            <Flex className={`items-center gap-3`}>
            <IoMdCheckbox className="text-[24px] text-custom_orange"/>
            <h2 className="font-Urbanist font-semibold text-[20px] text-hash">Same as  Billing Details</h2>
            </Flex>
            <h1 className="font-bold font-Urbanist text-[32px] text-regal-blue">Your Order</h1>
            <div className='w-full border border-[#E4E4E4]'></div>
            <Flex className={`items-center w-full justify-between`}>
             <h3 className='font-Urbanist font-bold text-[20px] text-regal-blue'>Product</h3>
             <h3 className='font-Urbanist font-bold text-[20px] text-regal-blue'>Price</h3>
              </Flex> 
              <div className='w-full border border-[#E4E4E4]'></div>
              <Flex className={`items-center w-full justify-between`}>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>Product Name</h3>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$20.33 </h3>
              </Flex> 
            <Flex className={`items-center w-full justify-between`}>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>Subtotal</h3>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$20.33 </h3>
              </Flex> 
              <Flex className={`items-center w-full justify-between`}>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>Shipping</h3>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$20.33 </h3>
              </Flex> 
              <div className='w-full border border-[#E4E4E4]'></div>
              <Flex className={`items-center w-full justify-between`}>
             <h3 className='font-Urbanist font-bold text-[20px] text-regal-blue'>Total</h3>
             <h3 className='font-Urbanist font-medium text-[20px] text-regal-blue'>$20.33 </h3>
              </Flex> 
          </Flex>
          {/* left side end */}
          {/* right side */}
          <Flex className={`w-full lg:w-6/12 flex-col justify-between`}>
           <div>
           <h1 className="font-bold font-Urbanist text-[32px] text-regal-blue mb-10">Additional Information</h1>
           <input className="w-full pt-6 pb-[126px] px-[30px] bg-[#f6f6f6] outline-none text-hash" placeholder="Write a Message" type="text" />
            </div> 
            <div>
            <div className="p-5 md:p-10 bg-[#F6F6F6] rounded-xl mb-5">
              <Flex className={`gap-3`}>
              <FaCircleCheck size={64} className=" text-custom_orange"/>
              <div className="mt-3">
              <h1 className="font-bold font-Urbanist text-[20px] text-regal-blue mb-3">Direct bank transfer</h1>
              <p className="font-Urbanist font-semibold text-[16px] text-hash">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              </div>
              </Flex>
              <Flex className={`gap-3`}>
              <FaCircleCheck size={64} className="text-white "/>
              <div className="mt-3">
              <h1 className="font-bold font-Urbanist text-[20px] text-regal-blue mb-3">Cash on delivery</h1>
              <p className="font-Urbanist font-semibold text-[16px] text-hash">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              </div>
              </Flex>
            </div>
            <Common_btn to={`/*`} title={`Plance your Order`}/>
            </div>
          </Flex>
          {/* right side end */}
        </Flex>
      </Container>
    </section>
  );
};

export default Checkout_P;
