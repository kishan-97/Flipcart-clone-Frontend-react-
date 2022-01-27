import { ActionTypes } from "../constants/types";

const initialState={
    products:[]
}

export const productsReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.FETCH_PRODUCTS_SUCCESS:return {
            ...state,
            products:payload
        }
        default: return state
    }
};

