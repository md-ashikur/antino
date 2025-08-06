"use client";
import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header } = Layout;
const { Title } = Typography;

const navItems = [
  { key: 'home', label: <Link href="/">Home</Link> },
  { key: 'features', label: <Link href="/features">Features</Link> },
  { key: 'pricing', label: <Link href="/pricing">Pricing</Link> },
  { key: 'about', label: <Link href="/about">About</Link> },
  { key: 'table', label: <Link href="/table">Table</Link> },
  { key: 'contact', label: <Link href="/contact">Contact</Link> },
];

const Navbar: React.FC = () => (
  <Header
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)',
      padding: '0 20px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
      <RocketOutlined style={{ fontSize: 24, color: '#6366f1', marginRight: 8 }} />
      <Title level={4} style={{ margin: 0, color: '#0f172a', fontSize: '18px' }}>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          Antino
        </Link>
      </Title>
    </div>
    <Menu
      mode="horizontal"
      items={navItems}
      style={{
        flex: 1,
        minWidth: 0,
        border: 'none',
        background: 'transparent',
        fontSize: 16,
        fontWeight: 500,
        justifyContent: 'center',
      }}
    />
  </Header>
);

export default Navbar;