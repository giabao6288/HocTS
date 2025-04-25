function identity(arg) {
    return arg;
}
var num = identity(123);
var str = identity("Hello");
var box1 = { content: 42 };
var box2 = { content: "Apple" };
// Class dung Generics
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(10);
var stringStack = new Stack();
stringStack.push("TS");
console.log("Number Stack: ", numberStack.push);
console.log(stringStack);
