export interface Product{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    thumbnail:string;
    images:string[];
    quantity?:number;
}