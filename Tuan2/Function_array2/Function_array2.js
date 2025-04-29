// forEach duyệt mảng khi không cần trả kết quả về
var numbers5 = [1, 2, 3, 4];
numbers5.forEach(function (n) { return console.log(n); });
// find tìm phần tử đầu thỏa mãn điều kiện
var users = [{ nameB: "Gia" }, { nameB: "Bao" }];
var found = users.find(function (u) { return u.nameB === "Bao"; });
console.log(found);
// some trả về true nếu ít nhất 1 phần tử đúng điều kiện va every chỉ trả true nếu tất cả phần tử đúng điều kiện
var numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers6.some(function (n) { return n > 2; }));
console.log(numbers6.every(function (n) { return n > 2; }));
// sort sắp xếp mảng
var numbers7 = [3, 25, 77, 4];
numbers7.sort(function (a, b) { return a - b; });
console.log(numbers7);
// reverse đảo ngược mảng
var numbers8 = [1, 25, 6, 7, 5];
numbers8.reverse();
console.log(numbers8);
// silce cắt mảng kh thay đổi mảng gốc
var numbers9 = [1, 2, 3, 4, 5, 6];
console.log(numbers9.slice(1, 3));
console.log(numbers9);
// indexOf/includes tìm hoặc kiểm tra phần tử
var numbers10 = [1, 2, 3, 4, 5, 6];
console.log(numbers10.indexOf(6));
console.log(numbers10.includes(0));
