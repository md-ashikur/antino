'use client';

import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const InboxPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Inbox</Title>
      <Card>
        <p>Your inbox messages will appear here.</p>
      </Card>
    </div>
  );
};

export default InboxPage;
