// API calling function hereby

import axios from "axios"

export const getAdvertisementsAPI = async () => {
    let response = await axios.get("https://easy-red-sockeye-robe.cyclic.app/postad");
    return response.data;
}
export const postAdvertisementsAPI = async (data) => {
    let response = await axios.post("https://easy-red-sockeye-robe.cyclic.app/postad",data);
    return data;
}