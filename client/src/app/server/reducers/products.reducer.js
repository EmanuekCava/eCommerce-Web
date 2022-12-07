import { 
    INDEX_PRODUCTS,
    INDEX_FOOTWEAR,
    GET_PRODUCT,
    CATEGORY,
    GENDER
} from "../constants/products.const";

const initialState = {
    indexProducts: [],
    indexFootwear: [],
    product: {},
    productsCategory: []
}

const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case INDEX_PRODUCTS:
            return {
                ...state,
                indexProducts: action.payload,
                product: {}
            }

        case INDEX_FOOTWEAR: 
            return {
                ...state,
                indexFootwear: action.payload,
                product: {}
            }

        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
            }

        case CATEGORY:
            return {
                ...state,
                productsCategory: action.payload
            }

        case GENDER: {
            return {
                ...state,
                productsCategory: action.payload
            }
        }
    
        default:
            return state;
    }

}

export default productsReducer