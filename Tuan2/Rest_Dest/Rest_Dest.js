var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var numbers3 = [1, 2, 3, 4, 5, 6];
var rest = numbers3.slice(0);
console.log(rest);
// object 
var user = {
    id: 1,
    nameA: "ABaroo",
    age: 25,
    email: "ABaroo@gmail.com"
};
var nameA = user.nameA, other = __rest(user, ["nameA"]);
console.log(nameA);
console.log(other);
// dvsdsd
function showUser(_a) {
    var nameA = _a.nameA, info = __rest(_a, ["nameA"]);
    console.log("Ten: ".concat(nameA));
    console.log("Thong tin:", info);
}
showUser({ nameA: "ABAA", age: 25, email: "ABAA@gmail.com" });
