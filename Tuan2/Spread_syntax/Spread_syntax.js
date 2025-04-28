var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = [1, 2, 3, 4, 5];
var arr1 = __spreadArray(__spreadArray([], arr, true), [6, 7, 8, 9, 10], false);
console.log(arr1);
var obj = { name: "Bảo", age: 22 };
var obj1 = __assign(__assign({}, obj), { address: "Hồ Chí Minh", email: "giabao@gmail.com" });
console.log(obj1);
