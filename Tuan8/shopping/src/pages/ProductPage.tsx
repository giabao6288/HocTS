import ProductList from '../component/ProductList/ProductList';
import {useNavigate} from 'react-router-dom';
import {Product} from '../types/product';

const ProductPage=({onAddToCart} : {onAddToCart: (p:Product) => void}) => {
    const navigate = useNavigate();

    return(
        <div>
            <ProductList
                onViewDetail={(id) => navigate(`/products/${id}`)}
                onAddToCart={onAddToCart}
            />
        </div>
    );
};

export default ProductPage;