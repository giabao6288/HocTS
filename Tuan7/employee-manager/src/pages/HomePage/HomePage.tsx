import {useEffect,useState} from 'react';
import {Employee} from '../../models/Employee';
import {getEmployees, deleteEmployee} from '../../services/employeeService';
import EditPage from '../../pages/EditPage/EditPage';
import {Table, Button,Input, Pagination, Typography, Popconfirm, Space} from 'antd';
import {useNavigate} from 'react-router-dom';


const {Title} = Typography;

const HomePage = () =>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedEmpId, setSelectedEmpId] = useState<string | null>(null);
    const [employees, setEmployees] = useState<Employee[]> ([]);
    const [searchEmp,setSearchEmp] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredData, setFilteredData] = useState<Employee[]>([]);
    const navigate = useNavigate();
    const itemsPerPage=5;

    const handleOpenDrawer =(id:string) => {
        setSelectedEmpId(id);
        setIsDrawerOpen(true);
    }

    const handleCloseDrawer = () =>{
        setIsDrawerOpen(false);
        setSelectedEmpId(null);
    }
    
    const loadData = () =>{
        getEmployees()
        .then(res=>{
            setEmployees(res.data);
        })
        .catch(err => console.error('Load error: ',err));
    };
    const handleDelete = async (id:string)=>{
        await deleteEmployee(id);
        loadData();
    };

    useEffect(() => {
        loadData();
    },[]);

    useEffect(() => {
        const filtered=employees.filter(emp =>
            emp.name.toLowerCase().includes(searchEmp.toLowerCase())
        );
        setFilteredData(filtered);
        setCurrentPage(1);
    },[searchEmp,employees]);

    const columns=[
        {
            title:'Họ tên',
            dataIndex:'name',
            key:'name',
        },
        {
            title:'Năm sinh',
            dataIndex:'birthYear',
            key:'birthYear',
        },
        {
            title:'Giới tính',
            dataIndex:'gender',
            key:'gender',
        },
        {
            title:'SĐT',
            dataIndex:'phone',
            key:'phone',
        },
        {
            title:'Email',
            dataIndex:'email',
            key:'email',
        },
        {
            title:'Hành động',
            key:'action',
            render:(_: any, record:Employee)=>(
                <Space>
                    <Button 
                        type="primary"
                        onClick={() => handleOpenDrawer(String(record.id))}
                    >
                      ✏️ Sửa
                    </Button>
                    <Popconfirm
                        title="Bạn chắc chắn muốn xóa"
                        onConfirm={() => handleDelete(String(record.id))}
                        okText="Xóa"
                        cancelText="Hủy"
                    >
                        <Button danger>🗑️ Xóa</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    const paninatedData = filteredData.slice(
        (currentPage -1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    return (
        <div style={{padding:'24px'}}>
            <Title level={2}>Danh sách nhân viên</Title>
            <Space>
                 <Input 
                    placeholder="🔍Tìm kiếm theo tên..."
                    value={searchEmp}
                    onChange={(e) => setSearchEmp(e.target.value)}
                    allowClear
                />
                <Button type="primary" onClick={() => navigate("/create")}>
                    Thêm nhân viên
                </Button>
            </Space>
           
            <Table 

                columns={columns}
                dataSource={paninatedData}
                rowKey="id"
                pagination={false}
                bordered
            />
            <div style={{textAlign:'center', marginTop:16}}>
                <Pagination 
                    current={currentPage}
                    pageSize={itemsPerPage}
                    total={filteredData.length}
                    onChange={page =>setCurrentPage(page)}
                    showSizeChanger={false}
                />
            </div>
            <EditPage
                open={isDrawerOpen}
                onClose={handleCloseDrawer}
                employeeId={selectedEmpId}
                onSuccess={loadData}
            />
        </div>
    );
};

export default HomePage;