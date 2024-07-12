import React from 'react'
import Container from './Container'
import Common_title from './Common_title'
import Course_Contenct from './Course_Contenct'
const About_Course_P = () => {
  return (
    <section 
    className='my-[80px] md:my-[120px]'
    >
        <Container>
       <Common_title subtitle={`Popular Course`} title={`Featured Course On This Month`} />
       <div className='mt-40'>

       <Course_Contenct/>
       </div>
        </Container>
    </section>
  )
}

export default About_Course_P