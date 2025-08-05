import React from 'react';
import { Button, Input, ConfigProvider } from 'antd';
import theme from '../../../theme/themeConfig';
import CustomCard from '../../components/CustomCard';

export default function HomePage() {
  return (
    <ConfigProvider theme={theme}>
      <div style={{ padding: '40px', maxWidth: 500, margin: '0 auto' }}>
        <h1 style={{ marginBottom: 24, color: '#0f172a' }}>Welcome to Your Custom Ant Design Home</h1>
        <Input placeholder="Type something..." style={{ marginBottom: 16 }} />
        <Button type="primary" style={{ marginBottom: 24 }}>Custom Styled Button</Button>
        <CustomCard title="Custom Card">
          <p>This is a custom card component using the centralized theme.</p>
        </CustomCard>
      </div>
    </ConfigProvider>
  );
}