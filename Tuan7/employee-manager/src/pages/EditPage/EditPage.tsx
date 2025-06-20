import {useEffect} from 'react';
import {getEmployeeById,updateEmployee} from '../../services/employeeService';
import {Employee} from '../../models/Employee';
import {Grid,Drawer,Button, Form, Input, Select, message, InputNumber} from 'antd';





interface Pops{
    open:boolean;
    onClose: () => void;
    employeeId:string | null;
    onSuccess?: () =>void;
}

const {useBreakpoint} = Grid;

const EditPage=({open, onClose, employeeId, onSuccess}:Pops) =>{
    const [form] = Form.useForm();
    const screens = useBreakpoint();


    useEffect(() =>{
        if(employeeId) {
            getEmployeeById(employeeId)
                .then((data) => {
                    form.setFieldsValue(data);
                })
                .catch(() => {
                    message.error("Không tải được thông tin nhân viên!");
                })
        }
    },[employeeId]);

    const onFinish = async (values:Omit<Employee, 'id'>) =>{
        if(!employeeId) return;
        try{
            if(employeeId){
                await updateEmployee(employeeId,values);
                message.success('Đã cập nhật thông tin!');
                onClose();
                if(onSuccess) onSuccess();
            }
        }catch{
            message.error('Cập nhật không thành công!')
        }
    };


    return(
        <Drawer
            title="Chỉnh sửa học viên"
            width={screens.xs ? '100%':500}
            onClose={onClose}
            open={open}
            destroyOnClose
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
                    <Form.Item label="Họ tên" name="name" rules={[{required:true, message:'Nhập đầy đủ họ tên!'}]}>
                        <Input/>
                    </Form.Item>
    
                    <Form.Item label="Năm sinh" name="birthYear" rules={[{required:true, message:'Nhập năm sinh!'}]}>
                        <InputNumber style={{width:'100%'}} min={1900} max={new Date().getFullYear()}/>
                    </Form.Item>
    
                    <Form.Item label="Giới tính" name="gender" rules={[{required:true, message:'Chọn giới tính!'}]}>
                        <Select>
                            <Select.Option value="Nam">Nam</Select.Option>
                            <Select.Option value="Nữ">Nữ</Select.Option>
                            <Select.Option value="Khác">Khác</Select.Option>
                        </Select>
                    </Form.Item>
    
                    <Form.Item label="SĐT" name="phone" rules={[{required:true, message:'Nhập số điện thoại!'}]}>
                        <Input/>
                    </Form.Item>
    
                    <Form.Item label="Email" name="email" rules={[{required:true,type:'email', message:'Nhập email!'}]}>
                        <Input/>
                    </Form.Item>
    
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Cập nhật</Button>
                    </Form.Item>
              
            </Form>
        </Drawer>
    );
};

export default EditPage;