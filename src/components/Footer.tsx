import React from 'react';
import { Layout } from 'antd';
import { RocketOutlined } from '@ant-design/icons';



const Footer: React.FC = () => (
  <Layout style={{ textAlign: 'center', background: '#fff', color: '#222', padding: '32px 16px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
      <RocketOutlined style={{ fontSize: 20, color: '#6366f1' }} />
      <span style={{ fontWeight: 600, fontSize: 16 }}>Antino</span>
    </div>
    <div style={{ color: 'rgba(0,0,0,0.6)', fontSize: 14, marginBottom: 8 }}>
      Building the future of web applications with beautiful, accessible components.
    </div>
    <div style={{ color: 'rgba(0,0,0,0.4)', fontSize: 13 }}>
      © 2025 AntDesign Pro. All rights reserved.
    </div>
  </Layout>
);

export default Footer;
