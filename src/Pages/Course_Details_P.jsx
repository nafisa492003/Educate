import React from 'react'
import Common_Banner from './../Components/Common_Banner';
import Flex from '../Components/Flex';
import Course_D_P_left_side from '../Components/Course_D_P_left_side';
import Container from '../Components/Container';

const Course_Details_P = () => {
  return (
    <section>
        <Common_Banner title={`Course Details`} subtitle={`Course Details`}/>
        <Container>
        <Flex className={`gap-[36px] my-[120px]`}>
       <Course_D_P_left_side/>
        </Flex>
        </Container>
    </section>
  )
}

export default Course_Details_P