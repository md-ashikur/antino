'use client';


import theme from '../../../../theme/themeConfig';
import { Carousel, Button, Typography, Flex } from 'antd';

const carouselData = [
  {
    title: 'Step 1: Welcome',
    description: 'Get started with our dashboard and explore the features.',
    button: 'Start Now',
  },
  {
    title: 'Step 2: Add Products',
    description: 'Easily add and manage your products in a few clicks.',
    button: 'Add Product',
  },
  {
    title: 'Step 3: Track Sales',
    description: 'Monitor your sales and performance with real-time analytics.',
    button: 'View Sales',
  },
  {
    title: 'Step 4: Grow Business',
    description: 'Use insights and tools to grow your business efficiently.',
    button: 'Get Insights',
  },
];

export default function Products() {
  return (
    <div style={{ maxHeight: '40vh', minHeight: 220, width: '100%', maxWidth: 600, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     Product Page Content
    </div>
  )
}
