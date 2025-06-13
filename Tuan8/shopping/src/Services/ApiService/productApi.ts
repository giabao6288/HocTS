import axios from 'axios';
import {Product} from '../../types/product';

const BASE_URL = "https://dummyjson.com"

export type Category={
    slug:string;
    name:string;
    url:string;
}
export const getAllProducts = async ():Promise<Product[]> =>{
    const res= await axios.get(`${BASE_URL}/products`);
    return res.data.products;
};

export const getProductById = async (id: number): Promise<Product> =>{
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
};

export const searchProducts = async (query:string): Promise<Product[]> =>{
    const res= await axios.get(`${BASE_URL}/products/search?q=${query}`);
    return res.data.products;
};

export const getProductsByCategory = async (category:string) :Promise<Product[]> =>{
    const res= await axios.get(`${BASE_URL}/products/category/${category}`);
    return res.data.products;
};

export const getCategories = async (): Promise<Category[]> => {
    const res= await axios.get(`${BASE_URL}/products/categories`);
    return res.data;
};

export const addProduct = async (product:Partial<Product>): Promise<Product> => {
    const res = await axios.post(`${BASE_URL}/products/add`, product, {
        headers: {'Content-Type':'application/json'}
    });
    return res.data;
};

export const updateProduct = async (id:number, updated: Partial<Product>) => {
    const res= await axios.put(`${BASE_URL}/products/${id}`,updated, {
        headers: {'Content-Type' : 'application/json'}
    });
    return res.data;
};

export const deleteProduct = async(id:number) =>{
    const res = await axios.delete(`${BASE_URL}/products/${id}`);
    return res.data;
};