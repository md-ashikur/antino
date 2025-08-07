'use client';

import { Card, Typography } from 'antd';

const { Title } = Typography;

const ProductStockPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Product Stock</Title>
      <Card>
        <p>Product stock information will appear here.</p>
      </Card>
    </div>
  );
};

export default ProductStockPage;
