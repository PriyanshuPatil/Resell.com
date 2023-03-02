// API calling function hereby

import axios from "axios"

export const getProductsAPI = async () => {
    let response = await axios.get("https://courageous-umbrella-moth.cyclic.app/products");
    return response.data;
}