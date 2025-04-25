var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "Iam ".concat(this.name, ", ").concat(this.age, " year old");
    };
    return Person;
}());
var p = new Person("Bao", 22);
console.log(p.introduce());
// Class cos ke thua
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.showInfo = function () {
        return "".concat(this.introduce(), " I'm in grade ").concat(this.grade);
    };
    return Student;
}(Person));
var s = new Student("Bao", 22, 12);
console.log(s.showInfo());
