import {Category} from "../enums/Category";

export interface Product{
    id:number;
    name: string;
    price: number;
    category: Category;
}