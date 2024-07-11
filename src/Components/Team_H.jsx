import React from 'react'
import team_bg from '../assets/Instructor_BG.png'
import Common_title from './Common_title'
const Team_H = () => {
  return (
    <section style={{
        backgroundImage:`url(${team_bg})`,
    }}
    className='pt-[80px] md:pt-[120px] pb-[375px] bg-no-repeat'
    >
  <Common_title subtitle={`Our Team`} title={`Meet Our Professional 
Instructor`} h1Width={`lg:w-[395px] text-center`}/>
    </section>
  )
}

export default Team_H