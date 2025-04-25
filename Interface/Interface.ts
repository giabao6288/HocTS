interface User{
    name: string;
    age:number;
}

function printUser(user:User):void{
    console.log(`ten: ${user.name}, tuoi: ${user.age}`);
}
const u:User={ name:"An", age:25};

printUser(u);

// Dung interface voi ham

interface Greet{
    (name:string):string;
}
const sayHello:Greet=(ten)=>{
    return "Hello"+ten;
};
console.log(sayHello("Bao"));

// interface kieu ke thua
interface Person{
    name:string;
}
interface Student extends Person{
    grade:number;
}
const s1:Student={name:"Bao", grade:9};

console.log(s1);
