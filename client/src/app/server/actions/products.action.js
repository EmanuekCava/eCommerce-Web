import { 
    INDEX_PRODUCTS,
    INDEX_FOOTWEAR,
    GET_PRODUCT,
    CATEGORY,
    GENDER
} from '../constants/products.const'

import * as productsApi from '../api/products.api'

export const productsCategoryAction = (category) => async (dispatch) => {

    try {

        const { data } = await productsApi.productsCategoryApi(category)

        dispatch({
            type: CATEGORY,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const indexProducts = () => async (dispatch) => {

    try {

        const { data } = await productsApi.productsIndexApi()

        dispatch({
            type: INDEX_PRODUCTS,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const indexFootwear = () => async (dispatch) => {

    try {

        const { data } = await productsApi.productsFootwearApi()

        dispatch({
            type: INDEX_FOOTWEAR,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const getProduct = (id, navigate) => async (dispatch) => {

    try {

        const { data } = await productsApi.productApi(id)

        dispatch({
            type: GET_PRODUCT,
            payload: data
        })

        navigate(`/product/${data._id}`)
        
    } catch (error) {
        console.log(error);
    }

}

export const productsGenderAction = (gender) => async (dispatch) => {

    try {

        const { data } = await productsApi.productsGenderApi(gender)

        dispatch({
            type: GENDER,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}