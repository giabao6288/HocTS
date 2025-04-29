const numbers3=[1,2,3,4,5,6];
const [...rest]=numbers3;
console.log(rest);

// object 
const user={
    id:1,
    nameA:"ABaroo",
    age:25,
    email:"ABaroo@gmail.com"
};

const {nameA, ...other} = user;
console.log(nameA);
console.log(other);


// dvsdsd
function showUser({nameA, ...info}:{nameA:string; age:number; email:string}){
    console.log(`Ten: ${nameA}`);
    console.log(`Thong tin:`, info);
}

showUser({nameA:"ABAA", age:25, email:"ABAA@gmail.com"});