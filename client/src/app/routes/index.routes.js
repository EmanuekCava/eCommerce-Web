import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import { indexProducts, indexFootwear, getProduct } from '../server/actions/products.action';
import { sugestionsAction, sugestionAction } from '../server/actions/sugestions.action';

import Sugestion from '../components/sugestions/sugestion'
import Clothing from '../components/products/clothing'

const Index = () => {

  const { sugestions, products } = useSelector(state => state)

  const [leftFootWear, setLeftFootWear] = useState(0)
  const [rightFootWear, setRightFootWear] = useState(3)

  const [leftClothing, setLeftClothing] = useState(0)
  const [rightClothing, setRightClothing] = useState(3)

  const [leftSuggestions, setLeftSuggestions] = useState(0)
  const [rightSuggestions, setRightSuggestions] = useState(2)

  const dispatch = useDispatch()

  const goLeftFootWear = () => {
    setLeftFootWear(leftFootWear - 1)
    setRightFootWear(rightFootWear - 1)
  }

  const goRightFootWear = () => {
    setLeftFootWear(leftFootWear + 1)
    setRightFootWear(rightFootWear + 1)
  }

  const goLeftClothing = () => {
    setLeftClothing(leftClothing - 1)
    setRightClothing(rightClothing - 1)
  }

  const goRightClothing = () => {
    setLeftClothing(leftClothing + 1)
    setRightClothing(rightClothing + 1)
  }

  useEffect(() => {
    dispatch(sugestionsAction())
    dispatch(indexProducts())
    dispatch(indexFootwear())
  }, [dispatch, leftFootWear, rightFootWear, leftClothing, rightClothing, leftSuggestions, rightSuggestions])

  setTimeout(() => {
    if (rightSuggestions != sugestions.sugestions.length) {
      setLeftSuggestions(leftSuggestions + 1)
      setRightSuggestions(rightSuggestions + 1)
    } else {
      setLeftSuggestions(0)
      setRightSuggestions(2)
    }
  }, 3000)

  return (
    <div className='p-3 '>
      <div className='mt-4'>
        <h1 className='ml-5 text-primary font-weight-bold user-select-none'>SUGESTIONS</h1>
        <div className='d-flex justify-content-space-around align-items-center flex-wrap'>
          {
            sugestions.sugestions.slice(leftSuggestions, rightSuggestions).map((sugestion) => {
              return <Sugestion sugestion={sugestion} dispatch={dispatch} sugestionAction={sugestionAction} key={sugestion._id} />
            })
          }
        </div>
      </div>
      <div className='mt-4'>
        <h1 className='ml-5 text-primary font-weight-bold user-select-none'>CLOTHING</h1>
        <div className='d-flex justify-content-center align-items-center flex-wrap p-4 w-100'>
          {
            (products.indexProducts.length >= 3) && (leftClothing > 0) ? <AiOutlineLeft className='h2 move' onClick={goLeftClothing} /> : <></>
          }
          {
            products.indexProducts.slice(leftClothing, rightFootWear).map((product) => {
              return <Clothing product={product} getProduct={getProduct} dispatch={dispatch} key={product._id} />
            })
          }
          {
            (products.indexProducts.length >= 3) && (rightClothing < products.indexProducts.length) ? <AiOutlineRight className='h2 move' onClick={goRightClothing} /> : <></>
          }
        </div>
      </div>
      <div className='mt-4'>
        <h1 className='ml-5 text-primary font-weight-bold user-select-none'>FOOTWEAR</h1>
        <div className='d-flex justify-content-center align-items-center flex-wrap p-4 w-100'>
          {
            (products.indexFootwear.length >= 3) && (leftFootWear > 0) ? <AiOutlineLeft className='h2 move' onClick={goLeftFootWear} /> : <></>
          }
          {
            products.indexFootwear.slice(leftFootWear, rightFootWear).map((product) => {
              return <Clothing product={product} getProduct={getProduct} dispatch={dispatch} key={product._id} />
            })
          }
          {
            (products.indexFootwear.length >= 3) && (rightFootWear < products.indexFootwear.length) ? <AiOutlineRight className='h2 move' onClick={goRightFootWear} /> : <></>
          }
        </div>
      </div>
    </div>
  )
}

export default Index