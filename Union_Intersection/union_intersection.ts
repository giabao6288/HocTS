let value: number | string;
value =123;
value ="Hello";


// Union voi function
function printId(id:number | string){
    console.log("ID:",id);
}
printId(123);
printId("ABC");

interface A{
    name: string;
}
interface B{
    age:number;
}

type Person = A&B;
const person:Person ={
    name:"Linh",
    age: 20};

console.log(person);

// Ket hop Union voi Intersection
interface Colorful {
    color: string;}

interface Circle {
    radius: number;}

type ColorfulOrCircle = Colorful | Circle;

type ColorfulAndCircle = Colorful & Circle;

const item1: ColorfulOrCircle = { color: "red" };
const item2: ColorfulOrCircle = { radius: 10 };

const item3: ColorfulAndCircle = {
color: "blue",
radius: 5};

function getLength(x:string |number){
    if(typeof x=== "string"){
        return x.length;
    }else{
        return x.toString().length;
    }
}

console.log(getLength("Hello")); 
console.log(getLength(123456));