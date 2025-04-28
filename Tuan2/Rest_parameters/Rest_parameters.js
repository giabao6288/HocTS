// // gom nhiều tham số thành một mảng
// function sum(...nums:number[]){
//     return nums.reduce((acc,val) =>acc + val,0);
// }
// console.log(sum(1,4,3));
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        result += number;
    }
    return result;
}
function getAvg() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, numbers_2 = numbers; _a < numbers_2.length; _a++) {
        var number = numbers_2[_a];
        result += number;
    }
    return result / numbers.length;
}
var total = getAvg(1, 2, 3, 4, 5);
console.log("Trung b\u00ECnh c\u1ED9ng l\u00E0: $".concat(total));
function TotalCity() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join("-");
}
var city = TotalCity("Phan thiết", "Đà lạt", "Vũng tàu", "Nha trang");
console.log("C\u00E1c th\u00E0nh ph\u1ED1: ".concat(city));
