var value;
value = 123;
value = "Hello";
// Union voi function
function printId(id) {
    console.log("ID:", id);
}
printId(123);
printId("ABC");
var person = {
    name: "Linh",
    age: 20
};
console.log(person);
var item1 = { color: "red" };
var item2 = { radius: 10 };
var item3 = {
    color: "blue",
    radius: 5
};
function getLength(x) {
    if (typeof x === "string") {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
console.log(getLength("Hello"));
console.log(getLength(123456));
