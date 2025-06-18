import {useEffect,useState} from 'react';
import {getProductById, getProductsByCategory} from '../../Services/ApiService/productApi';
import {Product} from '../../types/product';
import {useParams, useNavigate} from 'react-router-dom';
import {Row, Col, Image, Typography, Button, Card} from 'antd';


const {Title, Paragraph} = Typography;
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
        <div style={{maxWidth:1200, margin:'auto', padding:20}}>
            <Card style={{marginBottom:40, boxShadow:'0 0 15px rgba(0,0,0,0.1'}}>
                <Row gutter={40}>
                    <Col xs={24} md={10} style={{textAlign:'center'}}>
                        <Image width={300} src={product.thumbnail} alt={product.title} style={{borderRadius:10}} />
                    </Col>
                   <Col xs={24} md={14}>
                        <Title level={2}>{product.title}</Title>
                        <Paragraph>{product.description}</Paragraph>
                        <Paragraph style={{fontSize:18, fontWeight:'bold'}}>Danh mục: {product.category}</Paragraph>
                        <Paragraph style={{color:'#e64c3c', fontSize:20, fontWeight:'bold'}}>Giá: {product.price} $</Paragraph>
                        <Button type="primary" onClick={()=> onAddToCart(product)} style={{marginRight:10}}>Thêm vào giỏ</Button>
                        <Button onClick={()=> navigate('/products')}>Xem thêm sản phẩm</Button>
                   </Col>
                </Row>
            </Card>
            <div style={{padding:20, background:'f3f3f3', borderRadius:12}}>
                <Title level={3} style={{textAlign:'left'}}>Sản phẩm liên quan: </Title>
                <Row gutter={[16,16]} style={{overflowX:'auto', flexWrap:'nowrap'}}>
                    {related.map(item => (
                    <Col key={item.id} flex="0 0 100px" style={{minWidth:180}}>
                       <Card
                            hoverable
                            cover={<img alt={item.title} src={item.thumbnail} style={{height:120, objectFit:'contain'}}/>}
                            onClick={() => navigate(`/products/${item.id}`)}
                        >
                            <Paragraph style={{ marginBottom:8, fontWeight:500}}>{item.title}</Paragraph>
                            <Paragraph style={{color: '#e74c3c', fontWeight:'bold'}}>{item.price}</Paragraph>
                        </Card>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
};
export default ProductDetail;