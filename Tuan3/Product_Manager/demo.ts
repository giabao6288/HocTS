let username:string = "Bao";
let age:number=20;
let isAdmin:boolean=true;

let scores:number[]= [90,85,88];
let userInfo:[string,number]=["Ny", 30];

enum Role{
    User,
    Admin,
    Guest
}

let currentRole: Role =Role.Admin;

type ID = string|number;
let userId: ID="abc123";

interface Product{
    id:number;
    name:string;
    price:number;
    isAvailable:boolean;
}

const product1: Product ={
    id:1,
    name:"Laptop",
    price:1500,
    isAvailable:true,
};

function calculateTotal(price:number, tax:number= 0.1):number{
    return price + price * tax;
}
function wrapInArray<T>(value:T):T[]{
    return [value];
}

let numberArray = wrapInArray(10);
let stringArray = wrapInArray("hello");

let someValue:any="Hello TS";
let strLength: number =(someValue as string).length;

type HttpMethod= "GET" |"POST" | `DELETE_${string}`;
let method: HttpMethod = "DELETE_user";

function processScore(score:number, cb:(s:number)=>void):void{
    cb(score);
}
processScore(99,(s)=>console.log("Score is",s));

interface Shape{
    area():number;
}
class Rectangle implements Shape{
    constructor(public width:number,public height:number){}
    area():number{
        return this.width * this.height;
    }
}
const rect = new Rectangle(10,5);
console.log("Area: ", rect.area());

type ReadonlyExcept<T,K extends keyof T>={
    readonly [P in keyof T as P extends K ? never : P] :T[P]; 
}&{
    [P in K]: T[P];
};

type EditableUser = ReadonlyExcept<Product, 'price'>;

type JsonValue = string | number | boolean | null | JsonValue[] | {[key:string]:JsonValue};

const config:JsonValue={
    app:{
        name:"DEMO",
        version:1.0,
        featurs:["login","signup"]
    }
}