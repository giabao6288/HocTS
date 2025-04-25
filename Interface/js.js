class Person{
    constructor(name, age){
        this.name =name;
        this.age =age;
    }
    introduce(){
       return `Iam ${this.name}, ${this.age} years old`;
    }
}
const p=new Person("An", 30);
console.log(p.introduce());