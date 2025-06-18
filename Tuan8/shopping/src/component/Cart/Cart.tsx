import {Product} from '../../types/product';
import {List, InputNumber, Button, Typography, Divider, Row, Col, Empty, message, Image} from 'antd';

const {Title, Text} = Typography;
const Cart =({cart, updateQuantity, removeItem}: {
    cart : Product[];
    updateQuantity:(id:number,qty:number)=>void;
    removeItem:(id:number) => void;
    
}) => {
    const total=cart.reduce((sum,p) =>sum + p.price *(p.quantity || 1),0);
    return(
        <Row justify="center" style={{padding:20}}>
            <Col xs={24} sm={22} md={20} lg={16} xl={12}>
            <Title level={2}>Giỏ hàng</Title>
            {cart.length ===0 ? (
                <Empty description="Giỏ hàng trống."/>
            ):(
                <List
                    itemLayout="horizontal"
                    dataSource={cart}
                    renderItem={(item) =>(
                        <List.Item  
                            actions={[
                                <InputNumber
                                    min={1}
                                    value={item.quantity || 1}
                                    onChange={(value) => updateQuantity(item.id, Number(value))}
                                />,
                                <Button danger onClick={() =>removeItem(item.id)}>
                                    Xóa
                                </Button>,
                            ]}
                        >
                        <List.Item.Meta
                            avatar={<Image src={item.thumbnail} alt={item.title} width={80}/>}
                            title={item.title}
                            description={
                                <div>
                                    <Text>Giá: {item.price} $</Text>
                                    <br/>
                                    <Text strong>
                                        Thành tiền: {(item.price * (item.quantity || 1)).toFixed(2)} $
                                    </Text>
                                </div>
                            }
                        />
                        </List.Item>
                    )}
                />
                )}
                <Divider/>
                <Row justify="end">
                    <Col>
                        <Title level={3}>Tổng tiền: {total.toFixed(2)} $</Title>
                    </Col>
                </Row>
                </Col>
        </Row>
    );
};
export default Cart;