import React from 'react'
import Common_Banner from './../Components/Common_Banner';
import Flex from '../Components/Flex';
import Products_LeftSide_P from '../Components/Products_LeftSide_P';
import Container from '../Components/Container';
import Proudcts_RightSide_p from '../Components/Proudcts_RightSide_p';

const Products_P = () => {
  return (
    <section>
        <Common_Banner title={`Products`} subtitle={`Products`}/>
        <Container>
        <Flex className={`gap-10 flex-col lg:flex-row my-[80px] lg:my-[120px]`}>
       <Products_LeftSide_P/>
       <Proudcts_RightSide_p/>
        </Flex>
          </Container>
    </section>
  )
}

export default Products_P