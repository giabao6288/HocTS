import {useNavigate} from 'react-router-dom';
import {createEmployee} from '../../services/employeeService';
import {Employee} from '../../models/Employee';
import {Form, Input, Button, Select, InputNumber, Typography, message, Col, Row } from 'antd';

const{Title} =Typography;

const CreatePage =()=>{
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish= async (values: Omit<Employee, 'id'>) =>{
        try{
            await createEmployee(values);
            message.success('Thêm nhân viên thành công!');
            navigate('/');
        }catch (error){
            message.error('Thêm nhân viên thất bại!');
        }
    };


    return (
        <div style={{maxWidth: 600, margin:'0 auto', padding:24}}>
            <Row justify="center">
               <Col xs={24} sm={20} md={16} lg={12} xl={20}>
                    <Title level={2} style={{textAlign:'center'}}>Thêm nhân viên mới</Title>
                    <Form   
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={{
                            name:'',
                            birthYear: new Date().getFullYear(),
                            gender:'Nam',
                            phone:'',
                            email:'',
                        }}
                    >
                        <Form.Item
                            label="Họ tên"
                            name="name"
                            rules={[{required:true, message:"Nhập đầy đủ họ tên!"}]}
                        >
                            <Input/>
                        </Form.Item>
        
                        <Form.Item  
                            label="Năm sinh"
                            name="birthYear"
                            rules={[{required:true,message:'Nhập năm sinh!'}]}
                        >
                            <InputNumber min={1900} max={new Date().getFullYear()} style={{width:'100%'}}/>
                        </Form.Item>
                        <Form.Item
                            label="Giới tính"
                            name="gender"
                            rules={[{required: true, message:'Chọn giới tính!'}]}
                        >
                            <Select>
                                <Select value="Nam">Nam</Select>
                                <Select value="Nữ">Nữ</Select>
                                <Select value="Khác">Khác</Select>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="SĐT"
                            name="phone"
                            rules={[{required: true, message:'Nhập số điện thoại!'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{required:true, message:'Nhập email!'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Thêm nhân viên
                            </Button>
                        </Form.Item>
                    </Form>
               </Col>
            </Row>
        </div>
    );
};

export default CreatePage;