import {useEffect,useState} from 'react';
import {getProductById} from '../../Services/ApiService/productApi';
import {Product} from '../../types/product';
import {useParams} from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail= ({onAddToCart} : {onAddToCart :(p:Product)=>void})=>{
    const {id}= useParams();
    const [product,setProducts] = useState<Product | null>(null);

    useEffect(() => {
        if(id){
         getProductById(Number(id)).then(setProducts)
        }
    },[id]);

    if(!product) return <p>Loading...</p>;

    return (
        <div className="product-detail">
            <img src={product.thumbnail} alt={product.title}/>
           <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p><strong>Giá: {product.price} $</strong></p>
                <button onClick={()=> onAddToCart(product)}>Thêm vào giỏ</button>
           </div>
        </div>
    )
}   

export default ProductDetail;