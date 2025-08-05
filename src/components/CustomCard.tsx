import React from 'react';
import { Card } from 'antd';

interface CustomCardProps {
  title: string;
  children: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, children }) => (
  <Card
    title={title}
    style={{
      background: '#0a0a0a',
      color: '#ededed',
      borderRadius: 12,
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    }}
    headStyle={{ background: '#171717', color: '#ededed', borderRadius: '12px 12px 0 0' }}
    bodyStyle={{ background: '#0a0a0a', color: '#ededed' }}
  >
    {children}
  </Card>
);

export default CustomCard;
