import React from 'react'
import { useNavigate } from "react-router-dom";

const Clothing = ({ product, getProduct, dispatch }) => {

  const navigate = useNavigate()

  const clickProduct = () => {
    dispatch(getProduct(product._id, navigate))
  }

  return (
    <div className='text-center border border-ligth px-4 py-2 m-2 mw-25 get-product' onClick={clickProduct}>
      <p className='h3 font-weigth-normal user-select-none'>{product.title}</p>
      <img src={product.image} alt={product.title} className="user-select-none" style={{ height: '295px', width: '255px', objectFit: 'contain' }} />
      <p className='h4 font-weight-normal user-select-none'>{product.description}</p>
      <p className='h4 text-success font-weight-bold user-select-none'>${product.price}</p>
    </div>
  )
}

export default Clothing