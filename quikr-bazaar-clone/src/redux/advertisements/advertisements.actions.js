// action type for products

import { getAdvertisementsAPI, postAdvertisementsAPI } from "./advertisements.api";
import { GET_ADVERTISEMENTS_ERROR, GET_ADVERTISEMENTS_LOADING, GET_ADVERTISEMENTS_SUCCESS, POST_ADVERTISEMENTS_ERROR, POST_ADVERTISEMENTS_LOADING, POST_ADVERTISEMENTS_SUCCESS } from "./advertisements.types"

// Function for getting the products
export const getAdvertisements = () => async(dispatch) => {
    dispatch ({type: GET_ADVERTISEMENTS_LOADING});
    try {
        let data = await getAdvertisementsAPI();
        dispatch({ type: GET_ADVERTISEMENTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch ({type: GET_ADVERTISEMENTS_ERROR })
    }
}

export const postAdvertisements = (post_data) => async(dispatch) => {
    dispatch ({type: POST_ADVERTISEMENTS_LOADING});
    try {
        let data = await postAdvertisementsAPI(post_data);
        dispatch({ type: POST_ADVERTISEMENTS_SUCCESS, payload: post_data });
    } catch (error) {
        dispatch ({type: POST_ADVERTISEMENTS_ERROR, payload: post_data})
    }
}