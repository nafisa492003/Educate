import React from 'react'
import Container from './Container'
import Common_title from './Common_title'
import course_bg from '../assets/Course_bg.png'
import Flex from './Flex'
import Course_contenct_H from './Course_contenct_H'
const Course_H = () => {
  return (
    <section
    style={{
      backgroundImage:`url(${course_bg})`,
      backgroundPosition:`center`,
      backgroundSize:`cover`
    }}
    className='py-[120px]'>
     <Container>
     <Common_title subtitle={`Course`} title={`Favorite Topics To Learn`}/>
     <Flex className={`mt-[78px] flex-wrap gap-5`}>
      <Course_contenct_H/>
      <Course_contenct_H/>
      <Course_contenct_H/>
      <Course_contenct_H/>
     </Flex>
     </Container>
    </section>
  )
}

export default Course_H