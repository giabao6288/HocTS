function getDiscount(isMember) {
    return isMember && 0.1 || 0;
}
console.log(getDiscount(true));
console.log(getDiscount(false));
var nameT = " " || "Anonymous";
var isLoggedIn = true && "Welcome";
console.log(nameT);
console.log(isLoggedIn);
