import axios from "axios";
import { blogURL } from "../constants/url";

let headerConfig = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }

}

export const getAllBlogs = async () => {
    let responseOne = await axios.get(`${blogURL}/`);
    return responseOne
}
export const getMyBlogs = async () => {
    let responseTwo = await axios.get(`${blogURL}/myblogs`, headerConfig);
    return responseTwo;
}

export const postBlog = async (obj) => {
    
    let responseTwo = await axios.post(`${blogURL}/post`, obj, headerConfig);
    return responseTwo;
}
