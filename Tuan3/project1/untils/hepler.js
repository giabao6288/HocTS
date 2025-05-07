"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = isString;
exports.isNumber = isNumber;
function isString(value) {
    return typeof value === "string";
}
function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}
