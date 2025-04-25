// typeof
type alpha=string|number;
function add(a:alpha,b:alpha){
    if(typeof a==="number" && typeof b==="number"){
        return a+b;
    }
}
add(5,10);

// instanceof
class Banana {
    isTasty(): boolean{
        return true;
    }
}
class Apple{
    isJuicy():boolean{
        return true;
    }
}
type Fruit = Banana | Apple;

function buyFruit(fruit:Fruit):number{
    let price=0;

    if(fruit instanceof Banana){
        price = fruit.isTasty() ? 5:10;
    }
    return price;
}
const apple=new Apple();
const banana= new Banana();
console.log(buyFruit(apple));

