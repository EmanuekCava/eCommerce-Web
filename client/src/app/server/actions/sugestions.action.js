import { 
    SUGESTIONS,
    GET_SUGESTIONS
} from '../constants/sugestions.const'

import * as sugestionsApi from '../api/sugestions.api'

export const sugestionsAction = () => async (dispatch) => {

    try {

        const { data } = await sugestionsApi.sugestionsApi()

        dispatch({
            type: SUGESTIONS,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const sugestionAction = (id) => async (dispatch) => {

    try {

        const { data } = await sugestionsApi.sugestionApi(id)

        dispatch({
            type: GET_SUGESTIONS,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}