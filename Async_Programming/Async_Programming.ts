let x=1;
let y=2;

setTimeout(function(){
    console.log('Async')
}, 100)
console.log('Synchronous');
console.log(x);
console.log(y);

// Promise
function delay(ms:number): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Done after ${ms}ms`);
        },ms);
    });
}

delay(1000).then((result)=>{
    console.log(result);
});

// async va await
async function doSomething(){
    console.log("Start");
    const result = await delay(2000);
    console.log(result);
    console.log("End");
}
doSomething();

// async function fetchData(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.error("Loi khi fetch du lieu", error);
//     }
// }
