import { 
    GET_SUGESTIONS,
    SUGESTIONS,
} from "../constants/sugestions.const";

const initialState = {
    sugestions: [],
    sugestion: {}
}

const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUGESTIONS:
            return {
                ...state,
                sugestions: action.payload
            }
        case GET_SUGESTIONS:
            return {
                ...state, 
                sugestion: action.payload
            }
    
        default:
            return state;
    }

}

export default productsReducer