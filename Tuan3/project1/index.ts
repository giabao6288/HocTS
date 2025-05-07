import inquirer from "inquirer";
import {Product} from "./models/Product";
import {ProductService} from "./services/ProductService";
import {Category} from "./enums/Category";


const service = new ProductService();

async function mainMenu(){
    while(true){
        const {action}= await inquirer.prompt([
            {
                type:"list",
                name: "action",
                message: "Chọn thao tác",
                choices:[
                    "Thêm sản phẩm",
                    "Hiển thị tất cả",
                    "Tìm kiếm sản phẩm",
                    "Xóa sản phẩm",
                    "Thoát"
                ]
            }
        ]);
        switch(action){
            case "Thêm sản phẩm":{
                const newProduct = await inquirer.prompt([
                    {name: "id", type: "number", message: "ID sản phẩm"},
                    {name: "name", type: "input", message: "Tên sản phẩm"},
                    {name : "price",type: "number", message: "Giá sản phẩm"},
                    {
                        name: "category", type: "list", message:"Danh mục",choices: Object.values(Category)
                    }
                ]);
                service.addProduct(newProduct as Product);
                console.log("✅ Đã thêm sản phẩm!");
                break;
            }
            case "Hiển thị tất cả":{
                console.table(service.getAll());
                break;
            }
            case "Tìm kiếm theo tên":{
                const {keyword} = await inquirer.prompt([
                    {name:"keyword", type:"input", message:"Nhập từ khóa:"}
                ]);
                if (keyword.trim()) {
                    const results = service.searchByName(keyword);
                    console.table(results.length ? results : "❌ Không tìm thấy sản phẩm.");
                  } else {
                    console.log("⚠️ Bạn chưa nhập từ khoá.");
                  }
                  break;
                }
            case "Cập nhật sản phẩm":{
                const { updateId } = await inquirer.prompt([
                    { name: "updateId", type: "number", message: "ID sản phẩm cần cập nhật:" }
                  ]);
                
                  const productToUpdate = service.getAll().find(p => p.id === updateId);
                  if (!productToUpdate) {
                    console.log("❌ Không tìm thấy sản phẩm.");
                    break;
                  }
                
                  const updateInputs = await inquirer.prompt([
                    { name: "name", type: "input", message: `Tên mới (${productToUpdate.name}):` },
                    { name: "price", type: "input", message: `Giá mới (${productToUpdate.price}):` }
                  ]);
                
                  const newData: Partial<Product> = {};
                  if (updateInputs.name.trim()) newData.name = updateInputs.name;
                  const parsedPrice = parseFloat(updateInputs.price);
                  if (!isNaN(parsedPrice)) newData.price = parsedPrice;
                
                  const updated = service.updateProduct(updateId, newData);
                  console.log(updated ? "✅ Đã cập nhật sản phẩm!" : "❌ Cập nhật thất bại.");
                  if (updated) console.table(service.getAll().find(p => p.id === updateId));
                  break;
            }
            case "Xóa sản phẩm":{
                const {deleteId}= await inquirer.prompt([
                    {name: "deleteId", type: "number", message:" ID sản phẩm cần xóa:"}                   
                ]);
                const deleted = service.removeProduct(deleteId);
                console.log(deleted ? "✅ Đã xóa sản phẩm!" : "❌ Không tìm thấy sản phẩm!");
                break;
            }
            case "Thoát":{
                console.log("👋 Tạm biệt!");
                process.exit(0);
            }
        }
    }
}

mainMenu();