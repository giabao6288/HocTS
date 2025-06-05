import {Link,NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 ">
            <Link className="navbar-brand text-center " to="/">Quản lý nhân viên</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link ">Danh sách nhân viên</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/create" className="nav-link ">Thêm nhân viên</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;