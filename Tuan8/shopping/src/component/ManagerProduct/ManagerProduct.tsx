import {useEffect, useState, useRef} from 'react';
import {Product} from '../../types/product';
import './ManagerProduct.css';
import {getAllProducts,deleteProduct,addProduct,updateProduct} from '../../Services/ApiService/productApi';

const defaultForm:Product ={
    id:0,
    title:'',
    price:0,
    description:'',
    category:'',
    thumbnail:'',
    images:[]
};

const ManagerProduct=() =>{
    const [products, setProducts] = useState<Product[]>([]);
    const [form,setForm] = useState<Product>(defaultForm);
    const [isEditing,setIsEditing] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const fetchProducts = async() => {
        const data =await getAllProducts();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    },[]);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try{
            if(isEditing){
                const updated = await updateProduct(form.id,form);
                setProducts(products.map(p => (p.id === form.id ? updated: p)));
            }else {
                const added =await addProduct(form);
                setProducts([added,...products]);
            }
            setForm(defaultForm);
            setIsEditing(false);
            fetchProducts();
        }catch(error){
            alert("Đã có lỗi xảy ra! ");
            console.log(error);
        }
    };

    const handleEdit = (product:Product) => {
        setForm(product);
        setIsEditing(true);
        setTimeout(() =>{
            formRef.current?.scrollIntoView({behavior:'smooth'});
        },100);
    };

    const handleDelete = async (id:number) => {
        if(window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")){
            try{
                await deleteProduct(id);
                await fetchProducts();
            }catch(error){
                alert("Xóa thất bại");
                console.error(error);
            }
        }
    };


    return(
        <div className="manager-container">
            <h2 className="title">Quản lý sản phẩm</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="form-section">
                <input name="title" placeholder="Tên sản phẩm" value={form.title} onChange={handleChange} required/>
                <input name="price" type="number" placeholder="Giá" value={form.price} onChange={handleChange} required/>
                <textarea name="description" placeholder="Mô tả" value={form.description} onChange={handleChange}/>
                <input name="category" placeholder="Danh mục" value={form.category} onChange={handleChange}/>
                <input name="thumbnail" placeholder="Link ảnh" value={form.thumbnail} onChange={handleChange}/>
                <div className="form-buttons">
                    <button type="submit">{isEditing ? 'Cập nhật' : 'Thêm mới'}</button>
                    {isEditing && <button type="button" onClick={() => {setForm(defaultForm); setIsEditing(false);}}>Hủy</button>}
                </div>
            </form>

            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Mô tả</th>
                        <th>Danh mục</th>
                        <th>Ảnh</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(prod => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td className="description">{prod.description}</td>
                            <td>{prod.category}</td>
                            <td><img src={prod.thumbnail} alt={prod.title} width={50} /></td>
                            <td className="actions">
                                <button onClick={() => handleEdit(prod)}>Sửa</button>
                                <button onClick={() => handleDelete(prod.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ManagerProduct;