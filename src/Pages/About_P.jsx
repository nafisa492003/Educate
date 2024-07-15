import React from 'react'
import Common_Banner from '../Components/Common_Banner'
import About_Us_P from '../Components/About_Us_P'
import About_Counter_P from '../Components/About_Counter_P'
import About_Course_P from '../Components/About_Course_P'
import About_team_p from '../Components/About_team_p'
import About_team_members_p from '../Components/About_team_members_p'
import About_p_footer from '../Components/About_p_footer'
const About_P = () => {
  return (
   <>
    <Common_Banner title={`About`} subtitle={`About`}/>
   <About_Us_P/>
   <About_Counter_P/>
   <About_Course_P/>
   <About_team_p/>
   <About_team_members_p/>
   <About_p_footer/>
   </>
  )
}

export default About_P