'use client';
import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const OrderListPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Order List</Title>
      <Card>
        <p>Your order list will appear here.</p>
      </Card>
    </div>
  );
};

export default OrderListPage;
