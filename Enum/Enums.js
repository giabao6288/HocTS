var Action;
(function (Action) {
    Action[Action["up"] = 0] = "up";
    Action[Action["down"] = 1] = "down";
    Action[Action["left"] = 2] = "left";
    Action[Action["right"] = 3] = "right";
})(Action || (Action = {}));
// Gan gia tri thu cong
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["InProgress"] = 2] = "InProgress";
    Status[Status["Done"] = 3] = "Done";
})(Status || (Status = {}));
var taskStatus = Status.InProgress;
console.log(taskStatus);
console.log(taskStatus);
// Enums dang chuoi
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["BLue"] = "Blue";
})(Color || (Color = {}));
var paint = Color.BLue;
console.log(paint);
// Enum kiem tra role
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "User";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
function checkRole(role) {
    if (role === Role.Admin) {
        return "Dang nhap voi tu cach ADMIN";
    }
    else if (role === Role.User) {
        return "Dang nhap voi tu cach User";
    }
    return "Gioi han dang nhap";
}
console.log(checkRole(Role.Admin));
console.log(checkRole(Role.Guest));
// Su dung enums de lay so
var ac = Action.right;
console.log("Action.right= ", ac);
//tra nguoc:lay so ra ten enum
console.log("Ten cua Action 1:", Action[1]);
// Su dung enums trong switch
var ChonAction = function (action) {
    switch (action) {
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
