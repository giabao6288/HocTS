import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {createEmployee} from '../../services/employeeService';
import {Employee} from '../../models/Employee';
import './CreatePage.css';

const CreatePage =()=>{
    const[form,setForm] = useState<Omit<Employee,"id">>({
        name:"",
        birthYear:new Date().getFullYear(),
        gender:"Nam",
        phone:"",
        email:""
    })

    const navigate = useNavigate();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement |HTMLSelectElement>) =>{
        const {name, value} = e.target;
        setForm(prev =>({...prev,[name]:value}));
    };
    const handleSubmit =async (e:React.FormEvent) =>{
        e.preventDefault();
        await createEmployee(form);
        navigate("/");
    };

    return (
        <div className="container">
            <h2>Thêm nhân viên mới</h2>
            <form className="create-form" onSubmit={handleSubmit}>
                <label>Họ tên:</label>
                <input className="form-control" name="name" value={form.name} onChange={handleChange} required/>

                <label>Năm sinh:</label>
                <input type="number" className="form-control" name="birthYear" value={form.birthYear} onChange={handleChange} required/>            

                <label>Giới tính:</label>
                <select className="form-control" name="gender" value={form.gender} onChange={handleChange} required>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                </select>

                <label>SĐT:</label>
                <input className="form-control" name="phone" value={form.phone} onChange={handleChange} required/>

                <label>Email:</label>
                <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required/>

                <button className="btn-create" type="submit">➕Thêm nhân viên</button>
            </form>    
        </div>
    );
};

export default CreatePage;