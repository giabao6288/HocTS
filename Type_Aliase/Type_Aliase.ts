type UserA = { 
    name:string,
    age:number,
    email:string;
}
const BN: UserA ={
    name: "Gia Bao",
    age: 22,
    email: "giabao6288@gmail.com"
} 

// khai bao union
type StringNumber= string | number;

let value:StringNumber;
value = 2025;
value = "Friday";
// Function
type GreetingFunc = ( nameU:string)=>string;

const sayHelloU: GreetingFunc=(nameU)=>{
    return `Hello $(nameU)`;
}

const sayGoodbye: GreetingFunc=(nameU)=>{
    return `Goodbye ${nameU}`;
} 

//Generics
type Container<T> = {value:T}

let numberContainer: Container<number> = {value:5}
let stringContainer: Container<string> = {value:'Hello there'}

// VD
type Product={
    id:number,
    nameP:string,
    price:number,
    inStock:boolean
};

let pd1:Product={
    id:1,
    nameP:"nuoc ngot",
    price:5000,
    inStock:true
};
let pd2:Product={
    id:2,
    nameP:"Nuoc suoi",
    price:6000,
    inStock:false
};
console.log();
console.log(pd2);
