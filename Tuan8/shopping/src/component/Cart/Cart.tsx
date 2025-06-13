import {Product} from '../../types/product';
import './Cart.css';

const Cart =({cart, updateQuantity, removeItem}: {
    cart : Product[];
    updateQuantity:(id:number,qty:number)=>void;
    removeItem:(id:number) => void;
    
}) => {
    const total=cart.reduce((sum,p) =>sum + p.price *(p.quantity || 1),0);
    return(
        <div className="cart">
            <h2>Giỏ hàng</h2>
            {cart.length ===0 ? (
                <p>Giỏ hàng trống.</p>
            ):(
            cart.map(item => (
                <div className="cart-item" key={item.id}>
                    <span>{item.title}</span>
                    <span>Giá: {item.price}$</span>
                    <span>
                        Thành tiền:{(item.price*(item.quantity||1)).toFixed(2)}$
                    </span>
                    <input  
                        type="number"
                        value={item.quantity || 1}
                        onChange={e => updateQuantity(item.id, Number(e.target.value))}
                        min="1"
                    />
                    <button onClick={() =>{
                        if(window.confirm("Bạn có chắc muốn xóa sản phẩm ?")){
                            removeItem(item.id)
                            alert("Đã xóa sản phẩm khỏi giỏ hàng!");
                        }
                    }}>Xóa</button>
                </div>
            ))
            )}
            <h3>Tổng tiền: {total} $</h3>
        </div>
    );
};
export default Cart;