import { Routes, Route, NavLink} from 'react-router-dom';
import {useState} from 'react';
import {Product} from './types/product';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import ConfigPage from './pages/ConfigPage';

import './App.css';

function App(){
  const [cart,setCart] = useState<Product[]>([]);

  const addToCart =(product:Product)=>{
    const exist = cart.find(item => item.id === product.id);
    if(exist){
      setCart(cart.map(item => 
        item.id === product.id
          ?{...item, quantity: (item.quantity || 1) +1}
          :item
      ));
    }else{
      setCart([...cart,{...product,quantity:1}]);
    }
  }

  const updateQuantity = (id:number,qty:number) => {
    setCart(cart.map(item =>
      item.id === id ? {...item,quantity:qty}:item
    ));
  };
  
  const removeItem = (id:number) => {
    setCart(cart.filter(item => item.id !==id));
  }


  return(
    <div>
          <div className="Sidebar">
          <div className="nav-title">Shoppinggg</div>
          <nav className='nav-link'>
            <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''}>Trang chủ</NavLink>
            <NavLink to="/products" className={({isActive}) => (isActive ? 'active' : '')}>Sản phẩm</NavLink>
            <NavLink to="/cart" className={({isActive})=> isActive ? 'active' : ''}>Giỏ hàng ({cart.length})</NavLink>
            <NavLink to="/config" className={({isActive}) => isActive ? 'active' : ''}>Quản lý sản phẩm</NavLink>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductPage onAddToCart={addToCart}/>}/>
          <Route path="/products/:id" element={<ProductDetailPage onAddToCart={addToCart}/>}/>
          <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeItem={removeItem}/>}/>
          <Route path="/config" element={<ConfigPage/>}/>
        </Routes> 
      </div>
  )
};

export default App;