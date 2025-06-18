import {useEffect, useState, useRef} from 'react';
import {Product} from '../../types/product';
import {Row,Col,Drawer,Table, Button, Input, Form, Space, Typography, message, Image,} from 'antd';
import {getAllProducts,deleteProduct,addProduct,updateProduct} from '../../Services/ApiService/productApi';

const defaultForm:Product ={
    id:0,
    title:'',
    price:0,
    description:'',
    category:'',
    thumbnail:'',
    images:[]
};

const {Title} = Typography;

const ManagerProduct=() =>{
    const [products, setProducts] = useState<Product[]>([]);
    const [form]=Form.useForm();
    const [isEditing,setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] =useState(false);

    const formRef = useRef<HTMLDivElement>(null);

    const fetchProducts = async() => {
        const data =await getAllProducts();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    },[]);

    const onSubmit =async (value:Product) => {
        try{
            if(editingId !== null) {
                const updated = await updateProduct(editingId, value);
                setProducts(products.map(p => (p.id === editingId ? updated : p)));
                message.success("Cập nhật thành công!");
            }else {
                const added= await addProduct(value);
                setProducts([added,...products]);
                message.success("Thêm sản phẩm thành công");
            }
            form.resetFields();
            setIsEditing(false);
            setEditingId(null);
            setIsDrawerOpen(false);
        } catch(err){
            message.error("Lỗi khi lưu sản phẩm");
        }
    };

    const handleEdit = (product:Product) => {
        form.setFieldsValue(product);
        setIsEditing(true);
        setEditingId(product.id);
        setIsDrawerOpen(true);
    };

    const handleDelete = async (id:number) => {
        if(window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")){
            try{
                await deleteProduct(id);
                fetchProducts();
                message.success("Xóa thành công");
            }catch(error){
                message.error("Không thể xóa sản phẩm!");
            }
        }
    };

    const columns=[
        {title:'ID', dataIndex:'id', key:'id', width:50},
        {title:'Tên', dataIndex:'title', key:'title'},
        {title:'Giá', dataIndex:'price', key:'price'},
        {title:'Danh mục', dataIndex:'category', key:'category'},
        {
            title:'Ảnh',
            dataIndex:'thumbnail',
            key:'thumbnail',
            render:(url:string) =><Image width={50} src={url}/>,
        },
        {
            title:'Mô tả',
            dataIndex:'description',
            key:'description',
            render:(text:string) => (
                <div style= {{whiteSpace:'normal', wordBreak:'break-word', maxWidth:400}}>
                    {text}
                </div>
            ),
        },
        {
            title:'Hành động',
            dataIndex:'actions',
            render:(_:any,record:Product) => (
                <Space>
                    <Button onClick={() => handleEdit(record)}>Sửa</Button>
                    <Button danger onClick={() => handleDelete(record.id)}>Xóa</Button>
                </Space>
            ),
        },
    ];
    return(
        <Row justify="center" style={{padding:24, maxWidth:'100%', width:'100%'}}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Title level={3} style={{fontWeight:'bold'}}>Quản lý sản phẩm</Title>
    
                <Button 
                    type="primary"
                    style={{marginBottom:16}}
                    onClick={() =>{
                        form.resetFields();
                        setIsEditing(false);
                        setEditingId(null);
                        setIsDrawerOpen(true);
                    }}
                >
                    Thêm sản phẩm
                </Button>
    
                <Title level={3}>Thông tin sản phẩm</Title>
    
                <Table 
                    dataSource={products}
                    columns={columns}
                
                    scroll={{x:'max-content'}}
                    
                />
    
                <Drawer
                    title={isEditing ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}
                    open={isDrawerOpen}
                    onClose={() => {
                        setIsDrawerOpen(false)
                        form.resetFields();
                        setIsEditing(false);
                        setEditingId(null);
                    }}
                    width={400}
                    >
                        <Form 
                        form={form}
                        layout="vertical"
                        onFinish={onSubmit}
                        initialValues={isEditing ? undefined: defaultForm}
                    >
                        <Form.Item name="title" label="Tên sản phẩm" rules={[{ required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="price" label="Giá" rules={[{required:true}]}>
                            <Input type="number" />
                        </Form.Item>
                        <Form.Item name="category" label="Danh mục">
                            <Input/>
                        </Form.Item>
                        <Form.Item name="description" label="Mô tả">
                            <Input.TextArea rows={3}/>
                        </Form.Item>
                        <Form.Item name="thumbnail" label="Link ảnh">
                            <Input/>
                        </Form.Item>
                        <Form.Item>
                            <Space>
                                <Button 
                                    type="primary" 
                                        htmlType="submit">
                                    {isEditing ?'Cập nhật': 'Thêm mới'}
                                </Button>
                                {isEditing && (
                                    <Button 
                                        onClick={() => {
                                            form.resetFields();
                                            setIsEditing(false);
                                            setEditingId(null);
                                        }}
                                    >
                                    Hủy
                                    </Button>
                                )}
                            </Space>
                        </Form.Item>
                    </Form>
                    </Drawer>
                <div ref={formRef} style={{maxWidth:600}}>
                    
                </div>
            </Col>
          
        </Row>
    );
};

export default ManagerProduct;