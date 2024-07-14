import React from 'react'
import Container from './Container'
import Common_title from './Common_title'
import Flex from './Flex'
import Team_member_contenct from './Team_member_contenct'
import team_bg from '../assets/Base.png'
const About_team_members_p = () => {
  return (
   <section className='my-[80px] lg:my-[120px]'>
    <Container>
    <Common_title subtitle={`Our Team`} title={`Meet Our Professional Team Members`} h1Width={`lg:w-[633px] text-center`}/>
    <Flex className={`items-center gap-[36px] md:gap-[86px] lg:gap-[36px] flex-col lg:flex-row translate-y-[20px] lg:translate-y-[200px]`}>
        <Team_member_contenct/>
        <Team_member_contenct/>
        <Team_member_contenct/>
    </Flex>
    </Container>
    <img className='hidden lg:block' src={team_bg} alt="" />
   </section>
  )
}

export default About_team_members_p