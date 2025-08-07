'use client';

import React, { useState } from 'react';
import { Table, Select, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  product: string;
  location: string;
  datetime: string;
  price: string;
  amount: number;
  status: string;
}

const columns: ColumnsType<DataType> = [
  { title: 'Product Name', dataIndex: 'product', key: 'product' },
  { title: 'Location', dataIndex: 'location', key: 'location' },
  { title: 'Date - Time', dataIndex: 'datetime', key: 'datetime' },
  { title: 'Price', dataIndex: 'price', key: 'price' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => (
    <span style={{
      color:
        status === 'Completed' ? '#10b981' :
        status === 'Pending' ? '#f59e0b' :
        status === 'Cancelled' ? '#ef4444' : '#64748b',
      fontWeight: 600
    }}>{status}</span>
  ) },
];

const demoData: Record<string, DataType[]> = {
  January: [
    { key: 1, product: 'iPhone 15', location: 'New York', datetime: '2025-01-12 10:30', price: '$999', amount: 2, status: 'Completed' },
    { key: 2, product: 'MacBook Pro', location: 'London', datetime: '2025-01-15 14:20', price: '$2499', amount: 1, status: 'Pending' },
    { key: 3, product: 'AirPods Pro', location: 'Berlin', datetime: '2025-01-18 09:10', price: '$249', amount: 3, status: 'Completed' },
    { key: 4, product: 'iPad Air', location: 'Tokyo', datetime: '2025-01-22 16:45', price: '$599', amount: 1, status: 'Cancelled' },
  ],
  February: [
    { key: 1, product: 'Galaxy S24', location: 'Seoul', datetime: '2025-02-03 11:00', price: '$899', amount: 2, status: 'Completed' },
    { key: 2, product: 'Surface Pro', location: 'San Francisco', datetime: '2025-02-10 13:30', price: '$1299', amount: 1, status: 'Pending' },
    { key: 3, product: 'Pixel 8', location: 'Paris', datetime: '2025-02-14 15:00', price: '$799', amount: 2, status: 'Completed' },
    { key: 4, product: 'Apple Watch', location: 'Sydney', datetime: '2025-02-20 17:20', price: '$399', amount: 1, status: 'Completed' },
  ],
  March: [
    { key: 1, product: 'PlayStation 5', location: 'Los Angeles', datetime: '2025-03-05 12:00', price: '$499', amount: 1, status: 'Completed' },
    { key: 2, product: 'Xbox Series X', location: 'Toronto', datetime: '2025-03-12 14:40', price: '$499', amount: 1, status: 'Pending' },
    { key: 3, product: 'Nintendo Switch', location: 'Rome', datetime: '2025-03-18 10:15', price: '$299', amount: 2, status: 'Completed' },
    { key: 4, product: 'Kindle Paperwhite', location: 'Amsterdam', datetime: '2025-03-25 18:30', price: '$129', amount: 1, status: 'Cancelled' },
  ],
};


const months = Object.keys(demoData);

const TablePage: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
      <Typography.Title level={3} style={{ marginBottom: 24 }}>Product Sales</Typography.Title>
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ fontWeight: 500 }}>Month:</span>
        <Select
          value={selectedMonth}
          onChange={setSelectedMonth}
          options={months.map(m => ({ label: m, value: m }))}
          style={{ width: 160 }}
        />
      </div>
      <Table<DataType>
        bordered
        columns={columns}
        dataSource={demoData[selectedMonth]}
        pagination={{ pageSize: 6 }}
      />
    </div>
  );
};

export default TablePage;