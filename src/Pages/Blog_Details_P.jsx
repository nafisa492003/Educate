import React from 'react'
import Container from '../Components/Container'
import Common_Banner from './../Components/Common_Banner';
import Flex from '../Components/Flex';
import Blog_D_P_left_side from '../Components/Blog_D_P_left_side';

const Blog_Details_P = () => {
  return (
    <section>
      <Common_Banner title={`Blog Details`} subtitle={`Blog Details`}/>
        <Container>
            <Flex className={`gap-9 my-[80px] lg:my-[120px]`}>
             <Blog_D_P_left_side/>
            </Flex>
        </Container>
    </section>
  )
}

export default Blog_Details_P