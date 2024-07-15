import React from 'react'
import Common_Banner from './../Components/Common_Banner';
import Flex from '../Components/Flex';
import Team_member_contenct from './../Components/Team_member_contenct';
import Container from '../Components/Container';

const Teacher_P = () => {
  return (
    <section>
        <Common_Banner title={`Teacher`} subtitle={`Teacher`}/>
        <Container>
        <Flex className={`flex-wrap gap-[36px] my-[80px] flex-col lg:flex-row`}>
     <Team_member_contenct/>
     <Team_member_contenct/>
     <Team_member_contenct/>
        </Flex>
        <Flex className={`flex-wrap gap-[36px] my-[80px] flex-col lg:flex-row`}>
     <Team_member_contenct/>
     <Team_member_contenct/>
     <Team_member_contenct/>
        </Flex>

        </Container>
    </section>
  )
}

export default Teacher_P