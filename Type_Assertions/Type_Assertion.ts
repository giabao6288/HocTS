type One= string;
type Two=string | number;
type Three = 'Hello'

let a:One ='hello'; 
let b=a as Two ;
let c =a as Three;
let d=<One>'world';
let e=<string | number>'world'

const addOrConcat=(a:number, b:number, c:'add' | 'concat'):number | string =>{
    if(c==='add') return a+b
    return '' +a+b
}
let myVal: string= addOrConcat(2,2,'add')as string;
console.log(myVal);
let NextVal: number= addOrConcat(2,2,'concat')as number;
console.log(NextVal);

let valueA:unknown = "Hello Friday";
let strLength: number = (valueA as string).length;
console.log(strLength);

// vd
let valueB:any="12345";
let numValue:number = parseInt(valueB as string);
let result = numValue +5;
console.log(result);


let input :any ="false";
let boolInput:boolean = (input==="true") as boolean;
if(boolInput){
    console.log("Ket qua la TRUE");
}
else{
    console.log("Ket qua la FALSE");}