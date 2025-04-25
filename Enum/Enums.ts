enum Action{
    up,
    down,
    left,
    right
}
// Gan gia tri thu cong
enum Status{
    Pending=1,
    InProgress=2,
    Done=3
}
const taskStatus = Status.InProgress;
console.log(taskStatus);

console.log(taskStatus);
// Enums dang chuoi
enum Color{
    Red="Red",
    Green="Green",
    BLue="Blue"
}

const paint = Color.BLue;
console.log(paint);

// Enum kiem tra role
enum Role{
    Admin="ADMIN",
    User="User",
    Guest="GUEST"
}
function checkRole(role:Role){
    if(role === Role.Admin){
        return "Dang nhap voi tu cach ADMIN";
    }
    else if(role === Role.User){
        return "Dang nhap voi tu cach User";
    }
    
    return "Gioi han dang nhap";
}
console.log(checkRole(Role.Admin));
console.log(checkRole(Role.Guest));

// Su dung enums de lay so
let ac:Action=Action.right;
console.log("Action.right= ",ac);

//tra nguoc:lay so ra ten enum
console.log("Ten cua Action 1:", Action[1]);
// Su dung enums trong switch
const ChonAction = (action:Action)=>{
    switch(action){
        case Action.up:
            console.log("Dang up");
            break;
        case Action.down:
            console.log("Dang down");
            break;
        case Action.left:
            console.log("Dang left");
            break;
        case Action.right:
            console.log("Dang right");
            break;
        default: 
            console.log("Error");
            break;
    }
};
ChonAction(Action.right);