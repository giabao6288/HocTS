var userT = {
    name: "baoroo",
    age: 22,
    email: "baoro@gmail.com"
};
var userNa = userT.name, age = userT.age, email = userT.email;
console.log(userNa);
console.log(age);
console.log(email);
var product = {
    id: 123,
    title: "Laptop"
};
var productId = product.id, productTile = product.title;
console.log(productId);
console.log(productTile);
function greet(_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello ".concat(name, ", you are ").concat(age, " years old."));
}
greet({ name: "BAOROO", age: 22 });
var settings = {
    theme: "dark"
};
var theme = settings.theme;
console.log(theme);
