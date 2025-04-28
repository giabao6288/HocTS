// Kiểm tra an toàn thuộc tính khi truy cập có thể undefined hoặc null
const user ={ name:"Bảo",age:20,address:{city: "HoChiMinh"},contact:{phone:"0948844672"}};
console.log(user.address?.city);
console.log(user.contact?.phone);