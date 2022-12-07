import React from 'react'
import { useSelector } from "react-redux";

const Sugestion = () => {

    const { sugestions } = useSelector(state => state)

    return (
        <div className='text-center border border-ligth py-2 px-4'>
            <p className='display-2 font-weight-bold user-select-none text-wrap'>{sugestions.sugestion.title}</p>
            <img src={sugestions.sugestion.image} className="w-50" alt={sugestions.sugestion.title} style={{ height: '515px', objectFit: 'contain' }} />
            <p className='h1 text-danger font-weight-bold user-select-none text-wrap'><del>${sugestions.sugestion.price}</del></p>
            <p className='h1 text-success font-weight-bold user-select-none text-wrap'>${sugestions.sugestion.offer}</p>
            <button className='text-right my-2 font-weight-bold btn btn-success btn-lg text-center' style={{ width: '125px' }}>
                BUY
            </button>
        </div>
    )
}

export default Sugestion