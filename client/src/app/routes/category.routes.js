import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import { productsCategoryAction, productsGenderAction } from '../server/actions/products.action';

import ProductsCategory from '../components/products/productsCategory';

const Category = () => {

    const { products } = useSelector(state => state)

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(3)

    const params = useParams()
    const dispatch = useDispatch()

    const goLeft = () => {
        setLeft(left-1)
        setRight(right-1)
    }

    const goRight = () => {
        setLeft(left+1)
        setRight(right+1)
    }

    useEffect(() => {
        if (params.category == 'female' || params.category == 'male') {
            dispatch(productsGenderAction(params.category))
        } else {
            dispatch(productsCategoryAction(params.category))
        }
    }, [dispatch, params.category, left, right])

    return (
        <div className='d-flex justify-content-center align-items-center p-2 flex-wrap'>
            {
                (products.productsCategory.length >= 3) && (left > 0) ? <AiOutlineLeft className='h2 move' onClick={goLeft} /> : <></>
            }
            {
                products.productsCategory.slice(left,right).map((product) => {
                    return <ProductsCategory product={product} key={product._id} />
                })
            }
            {
                (products.productsCategory.length >= 3) && (right < products.productsCategory.length ) ? <AiOutlineRight className='h2 move' onClick={goRight} /> : <></>
            }
        </div>
    )
}

export default Category