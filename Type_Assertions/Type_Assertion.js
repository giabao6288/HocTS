var a = 'hello';
var b = a;
var c = a;
var d = 'world';
var e = 'world';
var addOrConcat = function (a, b, c) {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
var myVal = addOrConcat(2, 2, 'add');
console.log(myVal);
var NextVal = addOrConcat(2, 2, 'concat');
console.log(NextVal);
var valueA = "Hello Friday";
var strLength = valueA.length;
console.log(strLength);
// vd
var valueB = "12345";
var numValue = parseInt(valueB);
var result = numValue + 5;
console.log(result);
var input = "false";
var boolInput = (input === "true");
if (boolInput) {
    console.log("Ket qua la TRUE");
}
else {
    console.log("Ket qua la FALSE");
}
