import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Menu, Drawer, Button, Grid } from 'antd';

const { useBreakpoint } = Grid;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      key: '/',
      label: 'Danh sách nhân viên',
      onClick: () => {
        navigate('/');
        setOpen(false);
      },
    },
    {
      key: '/create',
      label: 'Thêm nhân viên',
      onClick: () => {
        navigate('/create');
        setOpen(false);
      },
    },
  ];

  return (
    <div
      style={{
        background: '#001529',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
      }}
    >
      <div
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '20px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        🛒 Shoppinggg
      </div>
      {screens.md ? (
        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={[location.pathname]}
          items={menuItems}
        />
      ) : (
        <>
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: 'white', fontSize: '20px' }} />}
            onClick={() => setOpen(true)}
          />
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
          >
            <Menu
              mode="vertical"
              selectedKeys={[location.pathname]}
              items={menuItems}
            />
          </Drawer>
        </>
      )}
    </div>
  );
};

export default Navbar;
