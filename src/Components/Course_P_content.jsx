import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Course_Contenct from './Course_Contenct';

const Course_P_content = () => {
  return (
    <section>
   <Container>
    <Flex  className={`items-center gap-[36px] flex-col lg:flex-row`}>
     <Course_Contenct/>
     <Course_Contenct/>
     <Course_Contenct/>
    </Flex>
    <Flex className={`items-center gap-[36px] hidden lg:flex mb-16`}>
    <Course_Contenct/>
     <Course_Contenct/>
     <Course_Contenct/>
    </Flex>
   </Container>
    </section>
  )
}

export default Course_P_content