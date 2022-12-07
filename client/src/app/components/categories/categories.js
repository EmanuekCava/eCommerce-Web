import React from 'react'

import Gender from './components/gender'
import List from './components/list'

const Categories = () => {
  return (
    <div className='d-flex justify-content-between align-items-center w-100 border-bottom border-primary'>
        <Gender />
        <List />
    </div>
  )
}

export default Categories