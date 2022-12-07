import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { productsCategoryAction, getProduct } from "../server/actions/products.action";

import Other from '../components/products/components/other';
import GetProduct from '../components/products/components/getProduct';

const Product = () => {

    const { products } = useSelector(state => state)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(productsCategoryAction(products.product.category))
    }, [dispatch, products.product.category])

    return (
        <>
            <GetProduct products={products} />
            <Other products={products.productsCategory} navigate={navigate} dispatch={dispatch} getProduct={getProduct} />
        </>
    )
}

export default Product