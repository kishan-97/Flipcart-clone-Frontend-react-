import { ActionTypes } from "../constants/types";
import {getProducts} from '../../Service/api';

const insertProducts=(products)=>{
    return {
    type:ActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload:products
    }
}

export const fetchProducts=()=>{
    return async (dispatch)=>{
        const fetchedProducts=await getProducts();
        dispatch(insertProducts(fetchedProducts.data));
    }
}