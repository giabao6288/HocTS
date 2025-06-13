import ProductDetail from '../component/ProductDetail/ProductDetail';
import {Product} from '../types/product';

const ProductDetailPage = ({onAddToCart}: {onAddToCart: (p:Product) => void }) => {
    return <ProductDetail onAddToCart={onAddToCart} />
};

export default ProductDetailPage;