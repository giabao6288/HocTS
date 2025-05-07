import {Product} from "../models/Product";
export class ProductService{
    private products:Product[]=[];
    
    addProduct(product: Product):void{
        this.products.push(product);
    }
    removeProduct(id:number):boolean{
        const index = this.products.findIndex(p=>p.id ===id);
        if(index !== -1){
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }
    updateProduct(id:number,newData: Partial<Product>):boolean{
        const product = this.products.find(p=>p.id ===id);
        if(product){
            Object.assign(product,newData);
            return true;
        }
        return false;
    }
    searchByName(name:string):Product[]{
        return this.products.filter(p=>p.name.toLowerCase().includes(name.toLowerCase()));
    }
    getAll():Product[]{
        return [...this.products];
    }
    sortByPrice(asc:boolean =true):Product[]{
        return [...this.products].sort((a,b)=> asc ? a.price - b.price : b.price - a.price)
    }
}