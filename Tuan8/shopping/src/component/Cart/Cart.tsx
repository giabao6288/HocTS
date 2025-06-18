import {Product} from '../../types/product';
import {List, InputNumber, Button, Typography, Divider, Row, Col, Empty, message} from 'antd';

const {Title, Text} = Typography;
const Cart =({cart, updateQuantity, removeItem}: {
    cart : Product[];
    updateQuantity:(id:number,qty:number)=>void;
    removeItem:(id:number) => void;
    
}) => {
    const total=cart.reduce((sum,p) =>sum + p.price *(p.quantity || 1),0);
    return(
        <div style={{maxWidth:900, margin:'0 auto', padding:20}}>
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
        </div>
    );
};
export default Cart;