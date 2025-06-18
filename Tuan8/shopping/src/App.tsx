import { Routes, Route, NavLink} from 'react-router-dom';
import {useState} from 'react';
import {Product} from './types/product';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import ConfigPage from './pages/ConfigPage';

import {Layout, Menu, Badge} from 'antd';
import {HomeOutlined, ShoppingCartOutlined, AppstoreOutlined, ToolOutlined} from '@ant-design/icons';

import './App.css';
const {Header, Content} = Layout;


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
    <Layout>
        <Header style={{userSelect:'none',display:'flex', alignItems:'center', background:'#001529'}}>
          <div className="logo" style={{color:'white', fontWeight:'bold', marginRight:'40px', fontSize:'20px'}}>🛒 Shoppinggg</div>
          <Menu theme="dark" mode="horizontal" style={{flex:1}}>
            <Menu.Item key="home" icon={<HomeOutlined/>}>
              <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''}>Trang chủ</NavLink>
            </Menu.Item>
            <Menu.Item key="products" icon={<AppstoreOutlined/>}>
              <NavLink to="/products" className={({isActive}) => (isActive ? 'active' : '')}>Sản phẩm</NavLink>
            </Menu.Item>
            <Menu.Item key="cart" icon={<ShoppingCartOutlined/>}>
              <NavLink to="/cart" className={({isActive})=> isActive ? 'active' : ''}>Giỏ hàng <Badge count={cart.length} offset={[10,-4]}/></NavLink>
            </Menu.Item>
            <Menu.Item key="config" icon={<ToolOutlined/>}>
              <NavLink to="/config" className={({isActive}) => isActive ? 'active' : ''}>Quản lý sản phẩm</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding:'24px 50px'}}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductPage onAddToCart={addToCart}/>}/>
            <Route path="/products/:id" element={<ProductDetailPage onAddToCart={addToCart}/>}/>
            <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeItem={removeItem}/>}/>
            <Route path="/config" element={<ConfigPage/>}/>
          </Routes> 
        </Content>
      </Layout>
  )
};

export default App;