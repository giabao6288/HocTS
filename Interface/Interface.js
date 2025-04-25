function printUser(user) {
    console.log("ten: ".concat(user.name, ", tuoi: ").concat(user.age));
}
var u = { name: "An", age: 25 };
printUser(u);
var sayHello = function (ten) {
    return "Hello" + ten;
};
console.log(sayHello("Bao"));
var s1 = { name: "Bao", grade: 9 };
console.log(s1);
