// action type for products

import { getProductsAPI } from "./products.api";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./products.types"

// Function for getting the products
export const getProducts = () => async(dispatch) => {
    dispatch ({type: GET_PRODUCTS_LOADING});
    try {
        let data = await getProductsAPI();
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch ({type: GET_PRODUCTS_ERROR})
    }
}