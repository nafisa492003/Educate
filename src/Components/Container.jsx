import React from 'react'

const Container = ({children}) => {
  return (
    <div className='px-2 mx-auto max-w-container'>{children}</div>
  )
}

export default Container