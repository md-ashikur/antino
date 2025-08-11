import React, { useState } from 'react';

import { Select, Typography } from 'antd';
import ReactApexChart from 'react-apexcharts';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Demo data for each month
const salesData: Record<string, number[]> = {
  January: Array.from({ length: 30 }, () => Math.random() * 100),
  February: Array.from({ length: 28 }, () => Math.random() * 100),
  March: Array.from({ length: 31 }, () => Math.random() * 100),
  April: Array.from({ length: 30 }, () => Math.random() * 100),
  May: Array.from({ length: 31 }, () => Math.random() * 100),
  June: Array.from({ length: 30 }, () => Math.random() * 100),
  July: Array.from({ length: 31 }, () => Math.random() * 100),
  August: Array.from({ length: 31 }, () => Math.random() * 100),
  September: Array.from({ length: 30 }, () => Math.random() * 100),
  October: Array.from({ length: 31 }, () => Math.random() * 100),
  November: Array.from({ length: 30 }, () => Math.random() * 100),
  December: Array.from({ length: 31 }, () => Math.random() * 100),
};

import type { ApexOptions } from 'apexcharts';

const SalesDetails: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('October');

  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 250,
      sparkline: { enabled: true },
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#2563eb'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.05,
        stops: [0, 90, 100],
        colorStops: [
          { offset: 0, color: '#2563eb', opacity: 0.3 },
          { offset: 100, color: '#2563eb', opacity: 0.05 },
        ],
      },
    },
    markers: {
      size: 4,
      colors: ['#2563eb'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: { size: 7 },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val: number) => val.toFixed(2),
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: { show: false },
    },
    grid: { show: false },
  };

  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: 24, marginBottom: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <Typography.Title level={5} style={{ margin: 0, fontWeight: 700, color: '#202224' }}>
          Sales Details
        </Typography.Title>
        <Select
          value={selectedMonth}
          onChange={setSelectedMonth}
          options={months.map(m => ({ label: m, value: m }))}
          style={{ width: 120 }}
          size="small"
        />
      </div>
      <ReactApexChart
        options={chartOptions}
        series={[{ name: 'Sales', data: salesData[selectedMonth] }]}
        type="area"
        height={250}
      />
    </div>
  );
};

export default SalesDetails;
