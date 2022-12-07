import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

const Gender = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const [isMale, setIsMale] = useState(false)
  const [isFemale, setIsFemale] = useState(false)

  const navigateMale = () => {
    navigate(`/category/male`)
  }
  const navigateFemale = () => {
    navigate(`/category/female`)
  }

  useEffect(() => {
    const param = location.pathname.split("/")
    if (param[2] === 'female') {
      setIsFemale(true)
    } else {
      setIsFemale(false)
    }
    if (param[2] === 'male') {
      setIsMale(true)
    } else {
      setIsMale(false)
    }
  }, [location])


  return (
    <ul className='w-25 d-flex justify-content-around user-select-none align-items-end flex-wrap'>
      <li className='text-primary text-nav ml-2 mr-2 item-footer' style={isMale ? { textDecoration: 'underline' } : {}} onClick={navigateMale}>MALE</li>
      <li className='text-primary text-nav ml-2 mr-2 item-footer' style={isFemale ? { textDecoration: 'underline' } : {}} onClick={navigateFemale}>FEMALE</li>
    </ul>
  )
}

export default Gender