'use client';

import React, { useState } from 'react';
import { Table, Typography, Select, Flex } from 'antd';
import demoData, { DealsDataType } from './dealsData';
import type { FlexProps, TableColumnsType } from 'antd';

const columns: TableColumnsType<DealsDataType> = [
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

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];




const DealsTable: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '14px' }}>
     <Flex justify="space-between" align="center" style={{ marginBottom: 24 }}>
       <Typography.Title level={2} style={{ margin: 0, fontWeight: 700 }}>
        Deals Details
      </Typography.Title>

        <Select
          value={selectedMonth}
          onChange={setSelectedMonth}
          options={months.map(m => ({ label: m, value: m }))}
          style={{ width: 160 }}
        />
    
     </Flex>
      <Table<DealsDataType>
        columns={columns}
        dataSource={demoData[selectedMonth]}
        bordered
        pagination={{ pageSize: 6 }}
      />
    </div>
  );
};

export default DealsTable;

