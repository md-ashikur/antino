'use client';

import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const FavoritesPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Favorites</Title>
      <Card>
        <p>Your favorite items will appear here.</p>
      </Card>
    </div>
  );
};

export default FavoritesPage;


