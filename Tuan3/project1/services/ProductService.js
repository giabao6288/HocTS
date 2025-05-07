"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
    }
    ProductService.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.removeProduct = function (id) {
        var index = this.products.findIndex(function (p) { return p.id === id; });
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    };
    ProductService.prototype.updateProduct = function (id, newData) {
        var product = this.products.find(function (p) { return p.id === id; });
        if (product) {
            Object.assign(product, newData);
            return true;
        }
        return false;
    };
    ProductService.prototype.searchByName = function (name) {
        return this.products.filter(function (p) { return p.name.toLowerCase().includes(name.toLowerCase()); });
    };
    ProductService.prototype.getAll = function () {
        return __spreadArray([], this.products, true);
    };
    ProductService.prototype.sortByPrice = function (asc) {
        if (asc === void 0) { asc = true; }
        return __spreadArray([], this.products, true).sort(function (a, b) { return asc ? a.price - b.price : b.price - a.price; });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
