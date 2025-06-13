import axios from 'axios';

const BASE_URL = "https://dummyjson.com";

export const getCart = async (id =1) =>{
    const res = await axios.get(`${BASE_URL}/carts/${id}`);
    return res.data;
};