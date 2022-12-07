import React, { useEffect } from 'react'
// import { useParams } from "react-router-dom";

import ProductsOther from './components/productsOther'

const Other = ({ products, navigate, dispatch, getProduct }) => {

    // const params = useParams()

    // useEffect(() => {
    //     products.find((product) => {
    //         if (product._id === params.id) {
    //             console.log(products);
    //             const index = products.indexOf(product);
    //             products.splice(index)
    //             console.log(products);
    //         }
    //     })
    // }, [params.id, products])

    return (
        <>
            {
                products.length > 0 &&
                <div className='mt-4'>
                    <h1 className='ml-5 text-primary text-wrap user-select-none font-weight-bold'>IT MAY INTEREST YOU</h1>
                    <div className='d-flex justify-content-center align-items-center flex-wrap p-4 w-100'>
                        {
                            products.map((product) => {
                                return <ProductsOther product={product} navigate={navigate} dispatch={dispatch} getProduct={getProduct} key={product._id} />
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Other