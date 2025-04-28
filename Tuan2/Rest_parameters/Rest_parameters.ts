// // gom nhiều tham số thành một mảng
// function sum(...nums:number[]){
//     return nums.reduce((acc,val) =>acc + val,0);
// }
// console.log(sum(1,4,3));



function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result +=number;
    }
    return result;
}
function getAvg(...numbers){
    let result=0;
    for(let number of numbers){
        result +=number;
    }
    return result/numbers.length;
}
const total = getAvg(1,2,3,4,5);

console.log(`Trung bình cộng là: $${total}`);

function TotalCity(...strings){
    return strings.join("-")
}
const city = TotalCity("Phan thiết", "Đà lạt", "Vũng tàu","Nha trang");
console.log(`Các thành phố: ${city}`);