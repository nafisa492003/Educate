import React from 'react'
import Common_Banner from '../Components/Common_Banner'
import About_Us_P from '../Components/About_Us_P'
import About_Counter_P from '../Components/About_Counter_P'
import About_Course_P from '../Components/About_Course_P'
const About_P = () => {
  return (
   <>
    <Common_Banner title={`About`} subtitle={`About`}/>
   <About_Us_P/>
   <About_Counter_P/>
   <About_Course_P/>
   </>
  )
}

export default About_P