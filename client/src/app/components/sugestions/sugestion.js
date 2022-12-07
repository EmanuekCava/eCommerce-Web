import React from 'react'
import { useNavigate } from "react-router-dom";

const Sugestion = ({ sugestion, dispatch, sugestionAction }) => {

  const navigate = useNavigate()

  const redirectSugestion = () => {
    navigate(`/sugestion/${sugestion._id}`)
    dispatch(sugestionAction(sugestion._id))
  }

  return (
    <div className='text-center border border-ligth p-2 get-product m-4 text-wrap' style={{ width: '40%' }} onClick={redirectSugestion}>
      <p className='h1 font-weight-normal user-select-none'>{sugestion.title}</p>
      <img src={sugestion.image} alt="sugestion" className="user-select-none w-75" style={{ height: '515px', objectFit: 'contain' }} />
      <p className='h4 font-weight-normal user-select-none'>{sugestion.description}</p>
      <div className='d-flex justify-content-center align-items-center'>
        <p className='h2 text-success font-weigth-bold user-select-none mr-2'>{sugestion.offer}</p>
        <p className='h2 text-danger text- font-weigth-bold user-select-none ml-2'><del>${sugestion.price}</del></p>
      </div>
    </div>
  )
}

export default Sugestion