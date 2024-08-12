import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const Mainlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate=useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={(e)=>{
            navigate(e.key)
          }}
          items={[
            {
              key: '',
              icon: <UserOutlined />,
              label: 'Dashboard',
            },
            {
                key: '/cart',
                icon: <UserOutlined />,
                label: 'cart',
              },
            {
              key: '/Category',
              icon: <VideoCameraOutlined />,
              label: 'Category',
            },
            {
              key: '/order',
              icon: <UploadOutlined />,
              label: 'order',
            },
            {
                key: '/orderitem',
                icon: <UploadOutlined />,
                label: 'orderitem',
              },
              {
                key: '/product',
                icon: <UploadOutlined />,
                label: 'product',
              },
              {
                key: '/Review',
                icon: <UploadOutlined />,
                label: 'Review',
              },
              {
                key: '/shipping',
                icon: <UploadOutlined />,
                label: 'shipping',
              },
              {
                key: '/user',
                icon: <UploadOutlined />,
                label: 'user',
              }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: "90vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Mainlayout;