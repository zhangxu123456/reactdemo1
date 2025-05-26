import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Home from '../views/Home';
import User from '../views/User';
import {
  StyledLayout,
  StyledSider,
  Logo,
  StyledHeader,
  ToggleButton,
  StyledContent
} from './styles';

const Router: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">首页</Link>,
    },
    {
      key: '/user',
      icon: <UserOutlined />,
      label: <Link to="/user">用户管理</Link>,
    },
  ];

  return (
    <BrowserRouter>
      <StyledLayout>
        <StyledSider trigger={null} collapsible collapsed={collapsed}>
          <Logo />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/']}
            items={menuItems}
          />
        </StyledSider>
        <Layout>
          <StyledHeader $background={colorBgContainer}>
            <ToggleButton onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </ToggleButton>
          </StyledHeader>
          <StyledContent 
            $background={colorBgContainer}
            $borderRadius={borderRadiusLG}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </StyledContent>
        </Layout>
      </StyledLayout>
    </BrowserRouter>
  );
};

export default Router; 