// const course = {
//     name:"Mega Insane TS Bootcamp A-Z Maasterclass",
//     regularPrice: 299.99,
//     discountedPrice: 159.99,
// };
// const price= course.discountedPrice ?? course.regularPrice;
// console.log(price);

// const gameConfig = {
//     startingCoins:null,
// };

// const character ={
//     coins: gameConfig.startingCoins ?? 1000,
// }; 

// console.info(character);

const users = [
    {username: "Baoro"},
    {username: null},
    {username:undefined},
    {username: ""}
];
users.forEach(user=>{
    const nameToDisplay = user.username || "Guest";
    console.log(nameToDisplay);
})


