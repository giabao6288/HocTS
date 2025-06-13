import {useState} from 'react';
import {Product} from '../../types/product';
import {addProduct} from '../../Services/ApiService/productApi';
import './AddProduct.css';

const AddProduct= () =>{
    const [product,setProduct] = useState<Omit<Product,'id'>>({
        title:'',
        price:0,
        description:'',
        category:'',
        thumbnail:'',
        images:[],
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProduct({...product,[e.target.name]: e.target.value});
    };

    const handleSubmit= async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            const newProduct = await addProduct(product);
            alert("Thêm thành công: "+ newProduct.title);
        }catch(error){
            console.error(error);
            alert("Thêm sản phẩm thất bại");
        }
    };
    return(
        <div className="add-product">
            <h2>Thêm sản phẩm mới</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Tên sản phẩm" value={product.title} onChange={handleChange} required />
                <input name="price" placeholder="Giá" value={product.price} onChange={handleChange} required /> 
                <textarea name="description" placeholder="Mô tả" value={product.description} onChange={handleChange} />
                <input name="category" placeholder="Danh mục" value={product.category} onChange={handleChange} />
                <input name="thumbnail" placeholder="Ảnh chính (thumbnail)" value={product.thumbnail} onChange={handleChange}/>
                <input name="images" placeholder="Danh sách ảnh (cách nhau bằng dấu phẩy" value={product.images} onChange={handleChange}/>
                <button type="submit">Thêm sản phẩm</button>
            </form>
        </div>
    );
};

export default AddProduct;