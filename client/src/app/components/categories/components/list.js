import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

const List = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const [isWinter, setIsWinter] = useState(false)
  const [isSummer, setIsSummer] = useState(false)
  const [isFootWear, setIsFootwear] = useState(false)
  const [isTShirts, setIsTShirts] = useState(false)
  const [isPants, setIsPants] = useState(false)
  const [isSportWear, setIsSportWear] = useState(false)
  const [isShirtsAndDresses, setIsShirtsAndDresses] = useState(false)

  useEffect(() => {
    const param = location.pathname.split("/")
    if (param[2] === 'winter') {
      setIsWinter(true)
    } else {
      setIsWinter(false)
    }
    if (param[2] === 'summer') {
      setIsSummer(true)
    } else {
      setIsSummer(false)
    }
    if (param[2] === 'footwear') {
      setIsFootwear(true)
    } else {
      setIsFootwear(false)
    }
    if (param[2] === 'tshirts') {
      setIsTShirts(true)
    } else {
      setIsTShirts(false)
    }
    if (param[2] === 'pants') {
      setIsPants(true)
    } else {
      setIsPants(false)
    }
    if (param[2] === 'sportwear') {
      setIsSportWear(true)
    } else {
      setIsSportWear(false)
    }
    if (param[2] === 'shirtsanddresses') {
      setIsShirtsAndDresses(true)
    } else {
      setIsShirtsAndDresses(false)
    }
  }, [location])


  const navigateWinter = () => {
    navigate(`/category/winter`)
  }
  const navigateSummer = () => {
    navigate(`/category/summer`)
  }
  const navigateFootwear = () => {
    navigate(`/category/footwear`)
  }
  const navigateTShirts = () => {
    navigate(`/category/tshirts`)
  }
  const navigatePants = () => {
    navigate(`/category/pants`)
  }
  const navigateSprotWear = () => {
    navigate(`/category/sportwear`)
  }
  const navigateShirtsAnDresses = () => {
    navigate(`/category/shirtsanddresses`)
  }

  return (
    <ul className='w-75 d-flex flex-wrap justify-content-around user-select-none align-items-end border-left border-primary'>
      <li className='text-primary text-nav ml-2 mr-2 item-footer' style={isWinter ? { textDecoration: 'underline' } : {}} onClick={navigateWinter}>WINTER</li>
      <li className='text-primary text-nav ml-2 mr-2 item-footer' style={isSummer ? { textDecoration: 'underline' } : {}} onClick={navigateSummer}>SUMMER</li>
      <li className='text-primary text-nav ml-2 mr-2 item-footer' style={isTShirts ? { textDecoration: 'underline' } : {}} onClick={navigateTShirts}>T-SHIRTS</li>
      <li className='text-primary text-nav ml-2 mr-2 item-footer' style={isPants ? { textDecoration: 'underline' } : {}} onClick={navigatePants}>PANTS</li>
      <li className='text-primary text-nav ml-2 mr-2 item-footer' style={isFootWear ? { textDecoration: 'underline' } : {}} onClick={navigateFootwear}>FOOTWEAR</li>
      <li className='text-primary text-nav ml-2 mr-2 item-footer' style={isSportWear ? { textDecoration: 'underline' } : {}} onClick={navigateSprotWear}>SPORTWEAR</li>
      <li className='text-primary text-nav ml-2 mr-2 item-footer' style={isShirtsAndDresses ? { textDecoration: 'underline' } : {}} onClick={navigateShirtsAnDresses}>SHIRTS AND DRESSES</li>
    </ul>
  )
}

export default List