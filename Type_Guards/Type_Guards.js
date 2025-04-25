function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}
add(5, 10);
// instanceof
var Banana = /** @class */ (function () {
    function Banana() {
    }
    Banana.prototype.isTasty = function () {
        return true;
    };
    return Banana;
}());
var Apple = /** @class */ (function () {
    function Apple() {
    }
    Apple.prototype.isJuicy = function () {
        return true;
    };
    return Apple;
}());
function buyFruit(fruit) {
    var price = 0;
    if (fruit instanceof Banana) {
        price = fruit.isTasty() ? 5 : 10;
    }
    return price;
}
var apple = new Apple();
var banana = new Banana();
buyFruit(apple);
console.log(buyFruit(banana));
