"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var ProductService_1 = require("./services/ProductService");
var Category_1 = require("./enums/Category");
var service = new ProductService_1.ProductService();
function mainMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function () {
                        var action, _b, newProduct, keyword, results, updateId_1, productToUpdate, updateInputs, newData, parsedPrice, updated, deleteId, deleted;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                                        {
                                            type: "list",
                                            name: "action",
                                            message: "Chọn thao tác",
                                            choices: [
                                                "Thêm sản phẩm",
                                                "Hiển thị tất cả",
                                                "Tìm kiếm sản phẩm",
                                                "Xóa sản phẩm",
                                                "Thoát"
                                            ]
                                        }
                                    ])];
                                case 1:
                                    action = (_c.sent()).action;
                                    _b = action;
                                    switch (_b) {
                                        case "Thêm sản phẩm": return [3 /*break*/, 2];
                                        case "Hiển thị tất cả": return [3 /*break*/, 4];
                                        case "Tìm kiếm theo tên": return [3 /*break*/, 5];
                                        case "Cập nhật sản phẩm": return [3 /*break*/, 7];
                                        case "Xóa sản phẩm": return [3 /*break*/, 10];
                                        case "Thoát": return [3 /*break*/, 12];
                                    }
                                    return [3 /*break*/, 13];
                                case 2: return [4 /*yield*/, inquirer_1.default.prompt([
                                        { name: "id", type: "number", message: "ID sản phẩm" },
                                        { name: "name", type: "input", message: "Tên sản phẩm" },
                                        { name: "price", type: "number", message: "Giá sản phẩm" },
                                        {
                                            name: "category", type: "list", message: "Danh mục", choices: Object.values(Category_1.Category)
                                        }
                                    ])];
                                case 3:
                                    newProduct = _c.sent();
                                    service.addProduct(newProduct);
                                    console.log("✅ Đã thêm sản phẩm!");
                                    return [3 /*break*/, 13];
                                case 4:
                                    {
                                        console.table(service.getAll());
                                        return [3 /*break*/, 13];
                                    }
                                    _c.label = 5;
                                case 5: return [4 /*yield*/, inquirer_1.default.prompt([
                                        { name: "keyword", type: "input", message: "Nhập từ khóa:" }
                                    ])];
                                case 6:
                                    keyword = (_c.sent()).keyword;
                                    if (keyword.trim()) {
                                        results = service.searchByName(keyword);
                                        console.table(results.length ? results : "❌ Không tìm thấy sản phẩm.");
                                    }
                                    else {
                                        console.log("⚠️ Bạn chưa nhập từ khoá.");
                                    }
                                    return [3 /*break*/, 13];
                                case 7: return [4 /*yield*/, inquirer_1.default.prompt([
                                        { name: "updateId", type: "number", message: "ID sản phẩm cần cập nhật:" }
                                    ])];
                                case 8:
                                    updateId_1 = (_c.sent()).updateId;
                                    productToUpdate = service.getAll().find(function (p) { return p.id === updateId_1; });
                                    if (!productToUpdate) {
                                        console.log("❌ Không tìm thấy sản phẩm.");
                                        return [3 /*break*/, 13];
                                    }
                                    return [4 /*yield*/, inquirer_1.default.prompt([
                                            { name: "name", type: "input", message: "T\u00EAn m\u1EDBi (".concat(productToUpdate.name, "):") },
                                            { name: "price", type: "input", message: "Gi\u00E1 m\u1EDBi (".concat(productToUpdate.price, "):") }
                                        ])];
                                case 9:
                                    updateInputs = _c.sent();
                                    newData = {};
                                    if (updateInputs.name.trim())
                                        newData.name = updateInputs.name;
                                    parsedPrice = parseFloat(updateInputs.price);
                                    if (!isNaN(parsedPrice))
                                        newData.price = parsedPrice;
                                    updated = service.updateProduct(updateId_1, newData);
                                    console.log(updated ? "✅ Đã cập nhật sản phẩm!" : "❌ Cập nhật thất bại.");
                                    if (updated)
                                        console.table(service.getAll().find(function (p) { return p.id === updateId_1; }));
                                    return [3 /*break*/, 13];
                                case 10: return [4 /*yield*/, inquirer_1.default.prompt([
                                        { name: "deleteId", type: "number", message: " ID sản phẩm cần xóa:" }
                                    ])];
                                case 11:
                                    deleteId = (_c.sent()).deleteId;
                                    deleted = service.removeProduct(deleteId);
                                    console.log(deleted ? "✅ Đã xóa sản phẩm!" : "❌ Không tìm thấy sản phẩm!");
                                    return [3 /*break*/, 13];
                                case 12:
                                    {
                                        console.log("👋 Tạm biệt!");
                                        process.exit(0);
                                    }
                                    _c.label = 13;
                                case 13: return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [5 /*yield**/, _loop_1()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
mainMenu();
