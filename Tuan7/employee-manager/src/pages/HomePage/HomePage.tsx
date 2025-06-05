import {useEffect,useState} from 'react';
import {Employee} from '../../models/Employee';
import {getEmployees, deleteEmployee} from '../../services/employeeService';
import {useNavigate} from 'react-router-dom';
import "./HomePage.css";

const HomePage = () =>{
    const [employees, setEmployees] = useState<Employee[]> ([]);
    const navigate = useNavigate();
    const [searchEmp,setSearchEmp] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage=5;

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

    const totalPages=Math.ceil(employees.filter(emp=>
        emp.name.toLowerCase().includes(searchEmp.toLowerCase())).length / itemsPerPage)
    useEffect(() =>{
        setCurrentPage(1);
        loadData();
    },[searchEmp]);
    return (
        <div className="container">
            <h2>Danh sách nhân viên</h2>
             <input 
                type="text"
                className="form-search mb-3"
                placeholder="🔍Tìm kiếm theo tên..."
                value={searchEmp}
                onChange={(e) => setSearchEmp(e.target.value)}
            />
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
                    {employees.filter((emp) =>
                        emp.name.toLowerCase().includes(searchEmp.toLowerCase())
                    )
                    .slice((currentPage-1) * itemsPerPage, currentPage*itemsPerPage)
                    .map((emp)=>  (
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
            <div className="PageItems d-flex justify-content-center mt-3">
                <nav>
                    <ul className="pagination pagination-sm">
                       <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(1)}>&laquo;</button>
                       </li>
                       <li className={`page-item ${currentPage===1 ? "disabled": ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage(prev => Math.max(prev-1,1))}>&lt;</button>
                       </li>

                        {Array.from({length:totalPages},(_, i) => (
                            <li key={i} className={`page-item ${currentPage === i+1 ? 'active' :''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(i+1)}>
                                    {i+1}
                                </button>
                            </li>
                        ))}

                        <li className={`page-item ${currentPage === totalPages ? "disabled" :""}`}>
                            <button className="page-link" onClick={()=>setCurrentPage(prev => Math.min(prev+1,totalPages))}>&gt;</button>
                        </li>
                        <li className={`page-item ${currentPage === totalPages ? "disabled" :""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(totalPages)}>&raquo;</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HomePage;