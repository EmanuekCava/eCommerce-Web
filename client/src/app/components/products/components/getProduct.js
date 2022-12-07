import React from 'react'

const GetProduct = ({ products }) => {

    return (
        <div className='text-center border border-ligth py-2 px-4'>
            <p className='display-2 font-weight-bold user-select-none text-wrap'>{products.product.title}</p>
            <img src={products.product.image} className="w-50 user-select-none" alt={products.product.title} style={{ height: '515px', objectFit: 'contain' }} />
            <p className='h1 text-success font-weight-bold user-select-none text-wrap'>${products.product.price}</p>
            <button className='text-right my-2 font-weight-bold btn btn-success btn-lg text-center' style={{ width: '125px' }}>
                BUY
            </button>
        </div>
    )
}

export default GetProduct