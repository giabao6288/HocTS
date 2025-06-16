import {useEffect,useState} from 'react';
import {getProductById, getProductsByCategory} from '../../Services/ApiService/productApi';
import {Product} from '../../types/product';
import {useParams, useNavigate} from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail= ({onAddToCart} : {onAddToCart :(p:Product)=>void})=>{
    const {id}= useParams();
    const navigate=useNavigate();
    const [product,setProducts] = useState<Product | null>(null);
    const [related, setRelated] = useState<Product[]>([]);
    
    useEffect(() => {
        if(id){
         getProductById(Number(id)).then(prod => {
            setProducts(prod);
            getProductsByCategory(prod.category).then((date) =>{
                const filtered = date.filter(p=> p.id !== prod.id);
                setRelated(filtered.slice(0,6));
            })
         })
        }
    },[id]);

    if(!product) return <p>Loading...</p>;

    return (
        <div className="page">
            <div className="product-detail">
                <div className="image-section">
                    <img className="product-image" src={product.thumbnail} alt={product.title}/>
                </div>
               <div className="info-section">
                    <h2>{product.title}</h2>
                    <p className="description">{product.description}</p>
                    <p className="category"><strong>Danh mục: {product.category}</strong></p>
                    <p className="price"><strong>Giá: {product.price} $</strong></p>
                    <button className="add-to-cart" onClick={()=> onAddToCart(product)}>Thêm vào giỏ</button>
                    <br/>
                    <button className="back-button" onClick={()=> navigate('/products')}>Xem thêm sản phẩm</button>
               </div>
            </div>
            <div className="related-section">
                    <h3>Sản phẩm liên quan: </h3>
                     <div className="related-products">
                        {related.map(item => (
                        <div key={item.id} className="related-card" onClick={() => navigate(`/products/${item.id}`)}>
                            <img src={item.thumbnail} alt={item.title}/>
                            <p>{item.title}</p>
                            <span>{item.price}$</span>
                        </div>
                    ))}
                    </div>
                </div>
        </div>
    );
};
export default ProductDetail;