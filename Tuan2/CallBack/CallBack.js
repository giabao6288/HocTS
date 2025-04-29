function greet1(name, callback) {
    var message1 = "Hello, ".concat(name, "!");
    callback(message1);
}
greet1("OMG", function (msg) {
    console.log("tin nhắn nhận được: ", msg);
});
function calculate(d, e, callback) {
    var result1 = d + e;
    callback(result1);
}
calculate(5, 15, function (sum) {
    console.log("tổng là: ", sum);
});
function fetch1(callback) {
    setTimeout(function () {
        callback("Dữ liệu đã được tải");
    }, 2000);
}
fetch1(function (data) {
    console.log(data);
});
