import React from 'react';
import { Card, Button, Avatar, Tag, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  color = '#6366f1' 
}) => (
  <Card
    hoverable
    style={{
      borderRadius: 16,
      overflow: 'hidden',
      border: '1px solid #f1f5f9',
      transition: 'all 0.3s ease',
    }}
    bodyStyle={{ padding: 24 }}
  >
    <div style={{ 
      fontSize: 48, 
      color, 
      marginBottom: 16,
      display: 'flex',
      justifyContent: 'center'
    }}>
      {icon}
    </div>
    <Title level={4} style={{ textAlign: 'center', marginBottom: 8 }}>
      {title}
    </Title>
    <Text type="secondary" style={{ textAlign: 'center', display: 'block' }}>
      {description}
    </Text>
  </Card>
);

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  avatar,
  rating
}) => (
  <Card
    style={{
      borderRadius: 16,
      height: '100%',
      border: '1px solid #f1f5f9',
    }}
    bodyStyle={{ padding: 24 }}
  >
    <div style={{ marginBottom: 16 }}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
    <Text style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 20, display: 'block' }}>
      &ldquo;{content}&rdquo;
    </Text>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar src={avatar} icon={<UserOutlined />} size={48} />
      <div>
        <Title level={5} style={{ margin: 0 }}>{name}</Title>
        <Text type="secondary">{role}</Text>
      </div>
    </div>
  </Card>
);

interface StatsCardProps {
  number: string;
  label: string;
  color?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ 
  number, 
  label, 
  color = '#6366f1' 
}) => (
  <div style={{ textAlign: 'center', padding: '16px 8px' }}>
    <Title 
      level={1} 
      style={{ 
        fontSize: 'clamp(28px, 6vw, 48px)', 
        fontWeight: 700, 
        color, 
        margin: 0,
        marginBottom: 8 
      }}
    >
      {number}
    </Title>
    <Text style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 500 }}>{label}</Text>
  </div>
);

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  isPopular = false,
  buttonText = 'Get Started'
}) => (
  <Card
    style={{
      borderRadius: 16,
      height: '100%',
      border: isPopular ? '2px solid #6366f1' : '1px solid #f1f5f9',
      position: 'relative',
      overflow: 'visible',
    }}
    bodyStyle={{ padding: 32 }}
  >
    {isPopular && (
      <Tag 
        color="#6366f1" 
        style={{ 
          position: 'absolute', 
          top: -12, 
          left: '50%', 
          transform: 'translateX(-50%)',
          borderRadius: 20,
          padding: '4px 16px',
          fontWeight: 500
        }}
      >
        Most Popular
      </Tag>
    )}
    
    <div style={{ textAlign: 'center', marginBottom: 24 }}>
      <Title level={3} style={{ margin: 0, marginBottom: 8 }}>{title}</Title>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 48, fontWeight: 700, color: '#6366f1' }}>{price}</span>
        <Text type="secondary" style={{ fontSize: 16 }}>/{period}</Text>
      </div>
    </div>

    <div style={{ marginBottom: 32 }}>
      {features.map((feature, index) => (
        <div key={index} style={{ marginBottom: 12, display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#10b981', marginRight: 8, fontWeight: 'bold' }}>✓</span>
          <Text>{feature}</Text>
        </div>
      ))}
    </div>

    <Button 
      type={isPopular ? 'primary' : 'default'} 
      size="large" 
      block
      style={{ 
        borderRadius: 8,
        height: 48,
        fontWeight: 500
      }}
    >
      {buttonText}
    </Button>
  </Card>
);
