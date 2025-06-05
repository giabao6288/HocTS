import {useEffect,useState} from 'react';
import {Employee} from '../../models/Employee';
import {getEmployees, deleteEmployee} from '../../services/employeeService';
import {useNavigate} from 'react-router-dom';
import "./HomePage.css";

const HomePage = () =>{
    const [employees, setEmployees] = useState<Employee[]> ([]);
    const navigate = useNavigate();

    const loadData = () =>{
        getEmployees()
        .then(res=>setEmployees(res.data))
        .catch(err => console.error('Load error: ',err));
    };
    const handleDelete = (id:number)=>{
        if(window.confirm("Bạn chắc chắn muốn xóa nhân viên này?")){
            deleteEmployee(id).then(() => loadData());
        }
    };
    useEffect(() =>{
        loadData();
    },[]);
    return (
        <div className="container">
            <h2>Danh sách nhân viên</h2>
            <button className = "btn btn-primary mb-3" onClick={() => navigate("/create")}>
                ➕ Thêm nhân viên
            </button>
            <table className="table table-striped table-bordered table-hover employee-table">
                <thead className="table-dark">
                    <tr>
                        <th>Họ tên</th>
                        <th>Năm sinh</th>
                        <th>Giới tính</th>
                        <th>SĐT</th>
                        <th>Email</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.birthYear}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.phone}</td>
                            <td>{emp.email}</td>
                            <td className="action-button">
                                <button className="btn btn-sm btn-warning me-2" onClick={() => navigate(`/edit/${emp.id}`)}>
                                  ✏️ Sửa
                                </button>
                                <button className="btn btn-sm btn-danger" onClick={() =>handleDelete(emp.id)}>
                                  🗑️Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;