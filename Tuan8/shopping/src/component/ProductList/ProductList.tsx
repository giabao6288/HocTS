import {useState, useEffect} from 'react';
import {getAllProducts, getCategories, getProductsByCategory} from '../../Services/ApiService/productApi';
import {Product} from '../../types/product';
import './ProductList.css';

type Props ={
        onViewDetail:(id:number) => void;
        onAddToCart: (product:Product) => void;
};

type Category={
    slug:string;
    name:string;
    url:string;
}


const ProductList = ({onViewDetail,onAddToCart}: Props) => {
    const [products,setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] =useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage=5;

    useEffect(() => {
        getAllProducts().then(setProducts);
        getCategories().then((data)=>{
            setCategories(data);
        });
    },[]);

    useEffect(() =>{
        setCurrentPage(1);
        if(selectedCategory==='all'){
            getAllProducts().then(setProducts);
        }else{
            getProductsByCategory(selectedCategory).then(setProducts);
        }
    },[selectedCategory]);

    const filteredProducts = products.filter((prod)=>
        prod.title.toLowerCase().includes(searchTerm.toLowerCase())   
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const currentProducts = filteredProducts.slice((currentPage-1)*itemsPerPage, currentPage * itemsPerPage);
    return (
        
        <div>
            <div className="filter-bar">
                <label>Lọc theo loại: </label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">-- Tất cả --</option>
                    {Array.isArray(categories) && categories.map(cat =>(
                        <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                    ))}
                </select>
                <input 
                    type="text"
                    placeholder="Tìm sản phẩm..."
                    value={searchTerm}
                    onChange={(e) =>{
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="search-input"
                />
            </div>
            <div className="product-list">
                    {currentProducts.map((prod) =>(
                        <div className="product-card" key={prod.id}>
                            <img src={prod.thumbnail} alt={prod.title}/>
                            <h3>{prod.title}</h3>
                            <p>{prod.price} $</p>
                            <div className="product-actions">
                                <button onClick={() => onViewDetail(prod.id)}>Xem chi tiết</button>
                                <button onClick={() => onAddToCart(prod)}>Mua ngay</button>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="pagination">
                <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev-1,1))}
                    disabled={currentPage ===1}
                >
                    Trang trước
                </button>
                {Array.from({length: totalPages },(_,i) => i+1).map((page)=>(
                    <button 
                        key={page}
                        className={page === currentPage ? 'active' : ''}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
                <button 
                    onClick={() =>setCurrentPage(prev => Math.min(prev+1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Trang sau
                </button>
            </div>
        </div>
    );
};

export default ProductList;

