class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    introduce():string{
        return `Iam ${this.name}, ${this.age} year old`;
    }
}
const p= new Person("Bao", 22);
console.log(p.introduce());

// Class cos ke thua
class Student extends Person{
    grade:number;

    constructor(name:string, age:number,grade:number){
        super(name,age);
        this.grade=grade;
    }
    showInfo():string{
        return `${this.introduce()} I'm in grade ${this.grade}`;
    }
}

const s= new Student("Bao",22,12);
console.log(s.showInfo());