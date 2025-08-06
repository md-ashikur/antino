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
  
  >
    {children}
  </Card>
);

export default CustomCard;
