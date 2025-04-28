// mappp tạo mảng biến đổi từng phần tử
const numbers = [1,2,3,4,5];
const squared = numbers.map(n => n * n);
console.log(squared);


type ProductB= {
    id:number;
    name:string;
    price:number;
}
const products: ProductB[]=[
    {id:1,name:"Phone", price:500},
    {id:2,name:"Laptop", price:1000},
    {id:3,name:"Tablet",price:300}
];
const productNames= products.map(product => product.name);
console.log(productNames);

// filter lọc phần tử
const numbers1 = [1,2,3,4,5,6,7];
const evens= numbers1.filter(n=>n%2===0);
console.log(evens);


// reduce tính toán tích lũy trên mảng
const numbers2=[1,2,3,4,5,6,7];
const sum1 = numbers2.reduce((total,n)=>total+n,0);
console.log(sum1);