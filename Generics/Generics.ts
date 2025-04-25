function identity<T>(arg:T):T{
    return arg;
}

let num= identity<number>(123);
let str= identity<string>("Hello");

// Inteface dung generics
interface Box<T>{
    content:T;
}
let box1:Box<number>={content:42};
let box2: Box<string>={content:"Apple"};

// Class dung Generics
class Stack<T>{
    private items:T[]=[];
    push(item:T){
        this.items.push(item);
    }
    pop(): T | undefined{
        return this.items.pop();
    }
}
const numberStack = new Stack<number>();
numberStack.push(10);

const stringStack = new Stack<string>();
stringStack.push("TS");

console.log(numberStack);
console.log(stringStack);