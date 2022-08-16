import axios from "axios";
import { userURL } from "../constants/url";

export const userSignup = async (obj) =>{
    let responseOne = await axios.post(`${userURL}/register`, obj);
    return responseOne
}
export const userLogin = async (obj) => {
    let responseTwo = await axios.post(`${userURL}/login`, obj);
    return responseTwo;
}

