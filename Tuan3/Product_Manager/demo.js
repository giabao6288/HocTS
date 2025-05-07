var username = "Bao";
var age = 20;
var isAdmin = true;
var scores = [90, 85, 88];
var userInfo = ["Ny", 30];
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var currentRole = Role.Admin;
var userId = "abc123";
var product1 = {
    id: 1,
    name: "Laptop",
    price: 1500,
    isAvailable: true,
};
function calculateTotal(price, tax) {
    if (tax === void 0) { tax = 0.1; }
    return price + price * tax;
}
function wrapInArray(value) {
    return [value];
}
var numberArray = wrapInArray(10);
var stringArray = wrapInArray("hello");
var someValue = "Hello TS";
var strLength = someValue.length;
var method = "DELETE_user";
function processScore(score, cb) {
    cb(score);
}
processScore(99, function (s) { return console.log("Score is", s); });
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rect = new Rectangle(10, 5);
console.log("Area: ", rect.area());
var config = {
    app: {
        name: "DEMO",
        version: 1.0,
        featurs: ["login", "signup"]
    }
};
