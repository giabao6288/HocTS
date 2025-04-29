function greet1(name: string, callback:(msg:string) =>void):void{
    const message1=`Hello, ${name}!`;
    callback(message1);
}
greet1("OMG", (msg) =>{
    console.log("tin nhắn nhận được: ", msg);
})


function calculate(d:number,e:number, callback:(result:number) => void):void{
    const result1=d+e;
    callback(result1);
}
calculate(5,15,(sum)=>{
    console.log("tổng là: ",sum)
});

function fetch1(callback:(data:string)=>void):void{
    setTimeout(() =>{
        callback("Dữ liệu đã được tải");
    },2000);
}
fetch1((data)=>{
    console.log(data);
});

// Callback khai báo riêng
type Callback=(value2:number)=>void;
function square(n:number,cb:Callback):void{
    cb(n*n);
}
square(4,(result1)=>console.log("Kết quả bình phương là:",result1));