import React from 'react'
import Common_Banner from './../Components/Common_Banner';
import Course_p_pagination from '../Components/Course_p_pagination';

const Course_P = () => {
  return (
    <section>
        <Common_Banner title={`Course`} subtitle={`Course`}/>
        <Course_p_pagination/>
    </section>
  )
}

export default Course_P