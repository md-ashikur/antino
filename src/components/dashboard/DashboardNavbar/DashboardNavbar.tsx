'use client';

import React, { useState } from 'react';
import { Layout, Menu, Button, Image } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import CustomIcon from '../../CustomIcon';
import './dashboard-navbar.css';

const { Sider, Header, Content } = Layout;

interface DashboardNavbarProps {
  children: React.ReactNode;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const getSelectedKey = () => {
    if (pathname.startsWith('/dashboard/product')) return '1';
    if (pathname.startsWith('/dashboard/favorites')) return '2';
    if (pathname.startsWith('/dashboard/inbox')) return '3';
    if (pathname.startsWith('/dashboard/orders')) return '4';
    if (pathname.startsWith('/dashboard/stock')) return '5';
    return '0';
  };

  const menuItems = [
    {
      key: '0',
      icon: <CustomIcon name="dashboard" size={20} style={{ filter: getSelectedKey() === '0' ? 'brightness(0) invert(1)' : undefined, color: getSelectedKey() === '0' ? '#fff' : '#202224' }} />,
      label: (
        <span style={{ display: 'flex', alignItems: 'center', marginLeft: '10px'}}>
          <Link href="/dashboard" style={{ color: getSelectedKey() === '0' ? '#fff' : undefined }}>
            Dashboard
          </Link>
        </span>
      ),
      className: getSelectedKey() === '0' ? 'dashboard-menu-active' : '',
    },
    {
      key: '1',
      icon: <CustomIcon name="product" size={20} style={{ filter: getSelectedKey() === '1' ? 'brightness(0) invert(1)' : undefined }} />,
      label: (
        <span style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <Link href="/dashboard/product" style={{ color: getSelectedKey() === '1' ? '#fff' : undefined }}>
            Products
          </Link>
        </span>
      ),
      className: getSelectedKey() === '1' ? 'dashboard-menu-active' : '',
    },
    {
      key: '2',
      icon: <CustomIcon name="favourite" size={20} style={{ filter: getSelectedKey() === '2' ? 'brightness(0) invert(1)' : undefined }} />,
      label: (
        <span style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <Link href="/dashboard/favorites" style={{ color: getSelectedKey() === '2' ? '#fff' : undefined }}>
            Favorites
          </Link>
        </span>
      ),
      className: getSelectedKey() === '2' ? 'dashboard-menu-active' : '',
    },
    {
      key: '3',
      icon: <CustomIcon name="inbox" size={20} style={{ filter: getSelectedKey() === '3' ? 'brightness(0) invert(1)' : undefined }} />,
      label: (
        <span style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <Link href="/dashboard/inbox" style={{ color: getSelectedKey() === '3' ? '#fff' : undefined }}>
            Inbox
          </Link>
        </span>
      ),
      className: getSelectedKey() === '3' ? 'dashboard-menu-active' : '',
    },
    {
      key: '4',
      icon: <CustomIcon name="order list" size={20} style={{ filter: getSelectedKey() === '4' ? 'brightness(0) invert(1)' : undefined }} />,
      label: (
        <span style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <Link href="/dashboard/orders" style={{ color: getSelectedKey() === '4' ? '#fff' : undefined }}>
            Order List
          </Link>
        </span>
      ),
      className: getSelectedKey() === '4' ? 'dashboard-menu-active' : '',
    },
    {
      key: '5',
      icon: <CustomIcon name="product stock" size={20} style={{ filter: getSelectedKey() === '5' ? 'brightness(0) invert(1)' : undefined }} />,
      label: (
        <span style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <Link href="/dashboard/stock" style={{ color: getSelectedKey() === '5' ? '#fff' : undefined }}>
            Product Stock
          </Link>
        </span>
      ),
      className: getSelectedKey() === '5' ? 'dashboard-menu-active' : '',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f6f8fa' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          position: 'fixed',
          height: '100vh',
          left: 0,
          top: 0,
          zIndex: 100,
          background: '#FFFFFF',
          borderRight: 'none',
          boxShadow: '2px 0 8px 0 rgba(0,0,0,0.08)',
          overflow: 'hidden',
        }}
        width={220}
        breakpoint="lg"
      >
        <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8 }}>
          <CustomIcon name="dashboard" size={36} />
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[getSelectedKey()]}
          items={collapsed
            ? menuItems.map(item => ({
                ...item,
                label: undefined,
                style: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '16px 0',
                },
              }))
            : menuItems
          }
          style={{
            borderRight: 0,
            background: 'transparent',
            fontSize: 16,
            fontWeight: 500,
            padding: '8px 0',
          }}
          inlineIndent={16}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 220, transition: 'margin-left 0.2s', minHeight: '100vh', background: '#f6f8fa' }}>
        {/* Top Navbar */}
        <Header
          style={{
            padding: '0 16px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: 64,
            borderBottom: '1px solid #e5e7eb',
            position: 'sticky',
            top: 0,
            zIndex: 99,
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: 22, color: '#6366f1' }}
            />
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#f3f4f6', borderRadius: 12, padding: '0 12px', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)', minWidth: 120, maxWidth: 400 }}>
              <SearchOutlined style={{ color: '#888', fontSize: 18 }} />
              <input
                type="text"
                placeholder="Search..."
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  padding: '10px 8px',
                  width: '100%',
                  height: 32,
                  fontSize: 16,
                  minWidth: 60,
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
            <Button type="text" icon={<BellOutlined style={{ fontSize: 20, color: '#6366f1' }} />} />
            <Image
              src="/icons/profile.svg"
              alt="Profile"
              width={32}
              height={32}
              style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid #e5e7eb', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.06)' }}
            />
          </div>
        </Header>
        <Content
          style={{
            margin: '32px 16px',
            padding: '32px 24px',
            minHeight: 280,
            background: '#fff',
            borderRadius: 18,
            boxSizing: 'border-box',
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardNavbar;