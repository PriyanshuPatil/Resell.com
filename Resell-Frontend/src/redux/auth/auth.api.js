// Login API calls to be done here
// For now it is implement with the help of REQRES
// API change is pending (ADS)

import axios from "axios";

export const loginAPI = async (creds) => {
  let response = await axios.post("https://reqres.in/api/login", creds);
  return response.data;
};
