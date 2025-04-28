// mappp tạo mảng biến đổi từng phần tử
var numbers = [1, 2, 3, 4, 5];
var squared = numbers.map(function (n) { return n * n; });
console.log(squared);
var products = [
    { id: 1, name: "Phone", price: 500 },
    { id: 2, name: "Laptop", price: 1000 },
    { id: 3, name: "Tablet", price: 300 }
];
var productNames = products.map(function (product) { return product.name; });
console.log(productNames);
// filter lọc phần tử
var numbers1 = [1, 2, 3, 4, 5, 6, 7];
var evens = numbers1.filter(function (n) { return n % 2 === 0; });
console.log(evens);
// reduce tính toán tích lũy trên mảng
var numbers2 = [1, 2, 3, 4, 5, 6, 7];
var sum1 = numbers2.reduce(function (total, n) { return total + n; }, 0);
console.log(sum1);
