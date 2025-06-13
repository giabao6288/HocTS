import Cart from '../component/Cart/Cart';
import {Product} from '../types/product';

const CartPage =({
    cart,
    updateQuantity,
    removeItem,
}: {
    cart:Product[];
    updateQuantity: (id:number,qty:number) =>void;
    removeItem:(id:number) => void;
}) => {
    return(
        <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem}/>
    );
};

export default CartPage;