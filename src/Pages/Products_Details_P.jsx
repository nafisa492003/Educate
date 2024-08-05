import React from "react";
import Common_Banner from "./../Components/Common_Banner";
import Flex from "../Components/Flex";
import product_img from "../assets/products_d.png";
import Container from "../Components/Container";
import { Rate } from "antd";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Common_btn from "./../Components/Common_btn";
import { FaCircleCheck } from "react-icons/fa6";
import user_img from '../assets/user_img.png';
const Products_Details_P = () => {
  return (
    <section>
      <Common_Banner title={`Product Details`} subtitle={`Product Details`} />
      <Container>
        {/* product part */}
        <Flex className={`gap-[60px] flex-col lg:flex-row my-[80px]`}>
          <div className="w-full lg:w-6/12">
            <img src={product_img} alt="" />
          </div>
          {/* right part */}
          <Flex className={`flex-col gap-6 w-full lg:w-6/12`}>
            <Flex className={`gap-5 md:gap-20 items-center`}>
              <h1 className="font-bold font-Urbanist text-[32px] text-regal-blue">
                Boss Sofa
              </h1>
              <h3 className="font-bold font-Urbanist text-[20px] text-custom_orange">
                $10.33
              </h3>
            </Flex>
            <Flex className={`items-center gap-5`}>
              <Rate value={5} className="text-custom_orange" />
              <h3 className="font-semibold font-Urbanist text-[20px] text-hash">
                2 Customer Review
              </h3>
            </Flex>
            <div className="w-full border border-[#E4E4E4]"></div>
            <p className="font-Urbanist font-semibold text-[16px] text-hash leading-8 w-full lg:w-[530px]">
              Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
              eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
              volutpat sit amet nec elit. Maecenas id hendrerit ipsum.
            </p>
            <h4 className="font-Urbanist font-semibold text-[20px] text-hash">
              REF. 305/639
            </h4>
            <h4 className="font-Urbanist font-semibold text-[20px] text-custom_orange">
              In stock
            </h4>
            <Flex className={`items-center gap-5`}>
              <h4 className="font-Urbanist font-bold text-[20px] text-hash">
                Quantity
              </h4>
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
            </Flex>
            <Flex className={`items-center gap-5 flex-col md:flex-row`}>
              <Common_btn title={`Add to Wishlist`} />
              <Common_btn to={`/cart`} title={`Add to Cart`} />
            </Flex>
          </Flex>
          {/* right part */}
        </Flex>
        {/*product part  */}
        {/* description */}
        <Flex className={`flex-col gap-10 my-8`}>
          <h1 className="font-Urbanist font-bold text-[32px] text-regal-blue">Description</h1>
          <p className="font-Urbanist font-medium text-[16px] text-hash">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor</p>
          <Flex className={`flex-col gap-4`}>
      <Flex className={`items-center gap-2`}>
        <FaCircleCheck size={24} className="text-custom_orange" />
        <h2 className="font-medium font-Urbanist text-[20px] text-regal-blue">
          Nibh. Nam nec eros id magna hendrerit s
        </h2>
      </Flex>
      <Flex className={`items-center gap-2`}>
        <FaCircleCheck size={24} className="text-custom_orange" />
        <h2 className="font-medium font-Urbanist text-[20px] text-regal-blue">
          Vitae nibh. Nam nec eros id magna hendrerit s
        </h2>
      </Flex>
      <Flex className={`items-center gap-2`}>
        <FaCircleCheck size={24} className="text-custom_orange" />
        <h2 className="font-medium font-Urbanist text-[20px] text-regal-blue">
          Nam nec eros id magna hendrerit s
        </h2>
      </Flex>
    </Flex>
    <Flex className={`flex-col gap-10`}>
   <h1 className="font-bold font-Urbanist text-[24px] text-regal-blue">2 Reviews</h1>
   <Flex className={`items-center gap-5 flex-col md:flex-row`}>
    <img src={user_img} alt="" />
    <div>
      <Flex className={`items-center justify-between mb-4`}>
      <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">David Shon</h2>
    <Rate value={5} className="text-custom_orange" />
      </Flex>
      <p className="font-semibold font-Urbanist text-[16px] text-hash">Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
    </div>
   </Flex>
  <div className="w-full border border-[#e4e4e4]"></div>
  <Flex className={`items-center gap-5 flex-col md:flex-row`}>
    <img src={user_img} alt="" />
    <div>
      <Flex className={`items-center justify-between mb-4`}>
      <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">David Shon</h2>
    <Rate value={5} className="text-custom_orange" />
      </Flex>
      <p className="font-semibold font-Urbanist text-[16px] text-hash">Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
    </div>
   </Flex>
  <div className="w-full border border-[#e4e4e4]"></div>
  <h2 className="font-Urbanist font-bold text-[24px] text-regal-blue">Add a Review</h2>
  <Flex className={`items-center gap-2`}>
    <span className="font-semibold font-Urbanist text-[20px] text-hash">Rate this course</span>
    <Rate  className="text-custom_orange" />
  </Flex>
  <Flex className={`items-center gap-5 flex-col lg:flex-row`}>
    <input className="w-full lg:w-[424px] py-6 px-[30px] bg-[#f6f6f6] outline-none text-hash" placeholder="Your Name" type="text" />
    <input className="w-full lg:w-[424px] py-6 px-[30px] bg-[#f6f6f6] outline-none text-hash" placeholder="Email Address" type="text" />
  </Flex>
  <input className="w-full pt-6 pb-[126px] px-[30px] bg-[#f6f6f6] outline-none text-hash" placeholder="Write a Message" type="text" />
  <Common_btn title={`Leave a Review`}/>
  </Flex>
        </Flex>
        {/* description */}
      </Container>
    </section>
  );
};

export default Products_Details_P;
