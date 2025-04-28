function greet(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello, ".concat(name, "!"));
}
greet();
greet("Alice");
function addtoCart(_a) {
    var product = _a.product, price = _a.price, _b = _a.quantity, quantity = _b === void 0 ? 2 : _b, _c = _a.currency, currency = _c === void 0 ? "VND" : _c;
    console.log(product, price, quantity, currency);
}
addtoCart({ product: 'Mango', price: 200, quantity: 10, currency: "USD" });
addtoCart({ product: 'Buoi', price: 20 });
var Bicycle = {
    product: 'Bicycle',
    price: 100
};
var Helmet = {
    product: 'Helmet',
    price: 150
};
var Bell = {
    product: 'Bell',
    price: 220
};
Array(Bicycle, Helmet, Bell).forEach(function (product) {
    var cartParams = Object.create(product);
    cartParams.currency = "CAD";
    addtoCart(product.product, product.price, { currency: 'CAD' });
});
