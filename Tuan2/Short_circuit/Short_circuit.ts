function getDiscount(isMember: boolean){
    return isMember && 0.1 || 0;
}
console.log(getDiscount(true));
console.log(getDiscount(false));

const nameT = "" || "Anonymous";
const isLoggedIn= true && "Welcome";

console.log(nameT); 
console.log(isLoggedIn);