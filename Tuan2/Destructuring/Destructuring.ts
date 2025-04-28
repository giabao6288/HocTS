const userT={
    name:"baoroo",
    age:22,
    email:"baoro@gmail.com"
};
const { name:userNa, age, email}=userT;
console.log(userNa);
console.log(age);
console.log(email);

const product= {
    id:123,
    title:"Laptop"
};

const{id:productId,title: productTile}= product;

console.log(productId);
console.log(productTile);


function greet({name,age}:{name:string,age:number}){
    console.log(`Hello ${name}, you are ${age} years old.`);
}
greet({name:"BAOROO",age:22});

const settings={
    theme:"dark"
};
const { theme}=settings;
console.log(theme);
