import React from 'react'

import Info from './components/info'
import MoreInfo from './components/more'

const Footer = () => {
  return (
    <div className='w-100 bg-dark p-4 text-center'>
        <Info />
        <MoreInfo />
    </div>
  )
}

export default Footer