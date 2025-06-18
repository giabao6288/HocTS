import {useEffect, useState, useRef} from 'react';
import {Product} from '../../types/product';
import {Table, Button, Input, Form, Space, Typography, message, Image,} from 'antd';
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
        } catch(err){
            message.error("Lỗi khi lưu sản phẩm");
        }
    };

    const handleEdit = (product:Product) => {
        form.setFieldsValue(product);
        setIsEditing(true);
        setEditingId(product.id);
        setTimeout(() =>{
            formRef.current?.scrollIntoView({behavior:'smooth'});
        },100);
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
        {
            title:'Mô tả',
            dataIndex:'description',
            key:'description',
            ellipsis:true,
        },
        {title:'Danh mục', dataIndex:'category', key:'category'},
        {
            title:'Ảnh',
            dataIndex:'thumbnail',
            key:'thumbnail',
            render:(url:string) =><Image width={50} src={url}/>,
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
        <div style={{padding:24}}>
            <Title level={3} style={{fontWeight:'bold'}}>Quản lý sản phẩm</Title>

            <div ref={formRef} style={{maxWidth:600}}>
                <Form 
                    form={form}
                    layout="vertical"
                    onFinish={onSubmit}
                    initialValues={defaultForm}
                >
                    <Form.Item name="title" label="Tên sản phẩm" rules={[{ required:true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="price" label="Giá" rules={[{required:true}]}>
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item name="description" label="Mô tả">
                        <Input.TextArea rows={3}/>
                    </Form.Item>
                    <Form.Item name="category" label="Danh mục">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="thumbnail" label="Link ảnh">
                        <Input/>
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
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
            </div>
            <Table  
                dataSource={products}
                columns={columns}
                rowKey="id"
                style={{marginTop:32}}
                scroll={{x:'max-content'}}
            />
        </div>
    );
};

export default ManagerProduct;