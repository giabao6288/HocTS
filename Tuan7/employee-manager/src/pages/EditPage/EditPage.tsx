import {useState, useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {getEmployeeById,updateEmployee} from '../../services/employeeService';
import {Employee} from '../../models/Employee';
import "./EditPage.css";

const EditPage=() =>{
    const {id} =useParams();
    const navigate=useNavigate();
    const [form,setForm]=useState<Omit<Employee,"id">>({
        name:"",
        birthYear:28/10/2003,
        gender:"Nam",
        phone:"",
        email:""
    });
    useEffect(() =>{
        if(id){
            getEmployeeById(+id).then(res=>setForm(res.data));
        }
    },[id]);

    const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const{name, value} = e.target;
        setForm(prev =>({...prev, [name]:value}));
    };

    const handleSubmit=async (e:React.FormEvent) =>{
        e.preventDefault();
        if(id){
            await updateEmployee(+id,form);
            navigate("/");
        }
    };
    return(
        <div className="container ">
            <h2>Chỉnh sửa nhân viên</h2>
            <form className="edit-form" onSubmit={handleSubmit}>
                <label>Họ tên:</label>
                <input className="form-control" name="name" value={form.name} onChange={handleChange} required/>

                <label>Năm sinh:</label>
                <input type="number" className="form-control" name="birthYear" value={form.birthYear} onChange={handleChange} required/>

                <label>Giới tính:</label>
                <select className="form-control" name="phone" value={form.phone} onChange={handleChange} required>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                </select>

                <label>SĐT:</label>
                <input className="form-control" name="phone" value={form.phone} onChange={handleChange}/>

                <label>Email:</label>
                <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange}/>

                <button className="btn-edit" type="submit">Cập nhật</button>
            </form>
        </div>
    );
};

export default EditPage;