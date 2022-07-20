import axios from "axios";
import { URL } from "../constants/url";

export const userSignup = async (obj) =>{
    let responseOne = await axios.post(`${URL}register`, obj);
    return responseOne
}
export const userLogin = async (obj) => {
    let responseTwo = await axios.post(`${URL}login`, obj);
    return responseTwo;
}