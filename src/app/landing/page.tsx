'use client';

import React from 'react';
import { 
  ConfigProvider, 
  Layout, 
  Typography, 
  Button, 
  Row, 
  Col, 
  Space, 
  Menu,
  Divider
} from 'antd';
import { 
  RocketOutlined, 
  SecurityScanOutlined,
  ThunderboltOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import customThemeConfig from '../../../theme/themeConfig';
import { FeatureCard, TestimonialCard, StatsCard, PricingCard } from '../../components/CustomComponents';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function LandingPage() {
  return (
    <ConfigProvider theme={customThemeConfig}>
      <Layout>
        {/* Header */}
        <Header 
          style={{ 
            background: '#ffffff', 
            padding: '0 20px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
          }}
        >
          <Row justify="space-between" align="middle" style={{ height: '100%' }}>
            <Col xs={12} sm={8} md={6}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RocketOutlined style={{ fontSize: 24, color: '#6366f1', marginRight: 8 }} />
                <Title level={4} style={{ margin: 0, color: '#0f172a', fontSize: '18px' }}>
                  AntDesign Pro
                </Title>
              </div>
            </Col>
            
            <Col xs={0} md={12} style={{ textAlign: 'center' }}>
              <Menu 
                mode="horizontal" 
                style={{ 
                  border: 'none', 
                  background: 'transparent',
                  fontSize: 16,
                  fontWeight: 500,
                  justifyContent: 'center'
                }}
                items={[
                  { key: 'home', label: 'Home' },
                  { key: 'features', label: 'Features' },
                  { key: 'pricing', label: 'Pricing' },
                  { key: 'about', label: 'About' },
                ]}
              />
            </Col>
            
            <Col xs={12} sm={8} md={6} style={{ textAlign: 'right' }}>
              <Space size="small">
                <Button type="text" size="middle" style={{ display: 'none' }}>Sign In</Button>
                <Button type="primary" size="middle">Get Started</Button>
              </Space>
            </Col>
          </Row>
        </Header>

        <Content>
          {/* Hero Section */}
          <section style={{ 
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            padding: '60px 20px 40px',
            textAlign: 'center',
            color: 'white'
          }}>
            <Title 
              level={1} 
              style={{ 
                color: 'white', 
                fontSize: 'clamp(32px, 8vw, 64px)', 
                fontWeight: 700,
                marginBottom: 24,
                lineHeight: 1.2
              }}
            >
              Build Amazing Apps with{' '}
              <span style={{ color: '#fbbf24' }}>Ant Design</span>
            </Title>
            <Paragraph 
              style={{ 
                fontSize: 'clamp(16px, 4vw, 20px)', 
                color: 'rgba(255,255,255,0.9)',
                marginBottom: 40,
                maxWidth: 600,
                margin: '0 auto 40px',
                padding: '0 20px'
              }}
            >
              Create beautiful, responsive applications with our premium component library. 
              Fast, modern, and customizable - everything you need to build your next project.
            </Paragraph>
            <Row justify="center" gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8}>
                <Button 
                  type="primary" 
                  size="large" 
                  block
                  style={{ 
                    background: 'white', 
                    color: '#6366f1',
                    border: 'none',
                    fontWeight: 600,
                    height: 48,
                    fontSize: 16
                  }}
                >
                  Start Free Trial
                </Button>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Button 
                  size="large" 
                  block
                  style={{ 
                    color: 'white', 
                    borderColor: 'white',
                    fontWeight: 600,
                    height: 48,
                    fontSize: 16
                  }}
                >
                  View Demo
                </Button>
              </Col>
            </Row>
            
            <div style={{ marginTop: 40 }}>
              <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(14px, 3vw, 16px)' }}>
                Trusted by 50,000+ developers worldwide
              </Text>
            </div>
          </section>

          {/* Stats Section */}
          <section style={{ padding: '60px 20px', background: '#f8fafc' }}>
            <Row gutter={[16, 24]} justify="center">
              <Col xs={12} sm={6}>
                <StatsCard number="50K+" label="Active Users" color="#6366f1" />
              </Col>
              <Col xs={12} sm={6}>
                <StatsCard number="99%" label="Uptime" color="#10b981" />
              </Col>
              <Col xs={12} sm={6}>
                <StatsCard number="150+" label="Components" color="#f59e0b" />
              </Col>
              <Col xs={12} sm={6}>
                <StatsCard number="24/7" label="Support" color="#ef4444" />
              </Col>
            </Row>
          </section>

          {/* Features Section */}
          <section style={{ padding: '80px 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <Title level={2} style={{ fontSize: 'clamp(32px, 6vw, 48px)', marginBottom: 16 }}>
                Why Choose Our Platform?
              </Title>
              <Paragraph style={{ fontSize: 'clamp(16px, 3vw, 18px)', color: '#64748b', maxWidth: 600, margin: '0 auto' }}>
                Everything you need to build modern applications, all in one place.
              </Paragraph>
            </div>

            <Row gutter={[24, 32]}>
              <Col xs={24} md={8}>
                <FeatureCard
                  icon={<ThunderboltOutlined />}
                  title="Lightning Fast"
                  description="Optimized performance with minimal bundle size and fast rendering."
                  color="#f59e0b"
                />
              </Col>
              <Col xs={24} md={8}>
                <FeatureCard
                  icon={<SecurityScanOutlined />}
                  title="Secure by Default"
                  description="Built-in security features and best practices for enterprise applications."
                  color="#10b981"
                />
              </Col>
              <Col xs={24} md={8}>
                <FeatureCard
                  icon={<GlobalOutlined />}
                  title="Global Ready"
                  description="Internationalization support with 40+ languages out of the box."
                  color="#6366f1"
                />
              </Col>
            </Row>
          </section>

          {/* Testimonials Section */}
          <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <Title level={2} style={{ fontSize: 'clamp(32px, 6vw, 48px)', marginBottom: 16 }}>
                What Our Users Say
              </Title>
            </div>

            <Row gutter={[24, 32]}>
              <Col xs={24} md={8}>
                <TestimonialCard
                  name="Sarah Johnson"
                  role="Frontend Developer at TechCorp"
                  content="This component library saved us months of development time. The quality and attention to detail is outstanding."
                  rating={5}
                />
              </Col>
              <Col xs={24} md={8}>
                <TestimonialCard
                  name="Mike Chen"
                  role="CTO at StartupXYZ"
                  content="The best investment we made for our product. Clean, modern, and incredibly easy to customize."
                  rating={5}
                />
              </Col>
              <Col xs={24} md={8}>
                <TestimonialCard
                  name="Emily Davis"
                  role="UI Designer"
                  content="Beautiful components that work perfectly out of the box. Our designers and developers love it."
                  rating={5}
                />
              </Col>
            </Row>
          </section>

          {/* Pricing Section */}
          <section style={{ padding: '80px 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <Title level={2} style={{ fontSize: 'clamp(32px, 6vw, 48px)', marginBottom: 16 }}>
                Simple, Transparent Pricing
              </Title>
              <Paragraph style={{ fontSize: 'clamp(16px, 3vw, 18px)', color: '#64748b' }}>
                Choose the plan that fits your needs. Upgrade or downgrade at any time.
              </Paragraph>
            </div>

            <Row gutter={[24, 32]} justify="center">
              <Col xs={24} lg={8}>
                <PricingCard
                  title="Starter"
                  price="$29"
                  period="month"
                  features={[
                    '50+ Components',
                    'Basic Templates',
                    'Email Support',
                    'Community Access'
                  ]}
                />
              </Col>
              <Col xs={24} lg={8}>
                <PricingCard
                  title="Professional"
                  price="$79"
                  period="month"
                  features={[
                    '150+ Components',
                    'Premium Templates',
                    'Priority Support',
                    'Advanced Themes',
                    'Custom Branding'
                  ]}
                  isPopular={true}
                />
              </Col>
              <Col xs={24} lg={8}>
                <PricingCard
                  title="Enterprise"
                  price="$199"
                  period="month"
                  features={[
                    'All Components',
                    'Custom Development',
                    '24/7 Phone Support',
                    'Dedicated Manager',
                    'SLA Guarantee'
                  ]}
                />
              </Col>
            </Row>
          </section>

          {/* CTA Section */}
          <section style={{ 
            padding: '80px 20px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            textAlign: 'center'
          }}>
            <Title 
              level={2} 
              style={{ 
                color: 'white', 
                fontSize: 'clamp(32px, 6vw, 48px)', 
                marginBottom: 24 
              }}
            >
              Ready to Get Started?
            </Title>
            <Paragraph 
              style={{ 
                fontSize: 'clamp(16px, 4vw, 20px)', 
                color: 'rgba(255,255,255,0.8)',
                marginBottom: 40,
                maxWidth: 600,
                margin: '0 auto 40px',
                padding: '0 20px'
              }}
            >
              Join thousands of developers who are already building amazing applications.
            </Paragraph>
            <Button 
              type="primary" 
              size="large" 
              style={{ 
                height: 48,
                padding: '0 32px',
                fontSize: 16,
                fontWeight: 600
              }}
            >
              Start Your Free Trial
            </Button>
          </section>
        </Content>

        {/* Footer */}
        <Footer style={{ 
          background: '#0f172a', 
          color: 'white',
          padding: '40px 20px 20px'
        }}>
          <Row gutter={[24, 32]}>
            <Col xs={24} md={6}>
              <div style={{ marginBottom: 24 }}>
                <RocketOutlined style={{ fontSize: 24, color: '#6366f1', marginRight: 8 }} />
                <Text style={{ fontSize: 18, fontWeight: 600, color: 'white' }}>AntDesign Pro</Text>
              </div>
              <Paragraph style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                Building the future of web applications with beautiful, accessible components.
              </Paragraph>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <Title level={5} style={{ color: 'white', marginBottom: 16, fontSize: 16 }}>Product</Title>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Features</Text>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Components</Text>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Templates</Text>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Themes</Text>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <Title level={5} style={{ color: 'white', marginBottom: 16, fontSize: 16 }}>Support</Title>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Documentation</Text>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Help Center</Text>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Contact Us</Text>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Status</Text>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <Title level={5} style={{ color: 'white', marginBottom: 16, fontSize: 16 }}>Company</Title>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>About</Text>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Blog</Text>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Careers</Text>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Press</Text>
              </div>
            </Col>
          </Row>
          <Divider style={{ backgroundColor: 'rgba(255,255,255,0.1)', margin: '40px 0 20px' }} />
          <div style={{ textAlign: 'center' }}>
            <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
              © 2025 AntDesign Pro. All rights reserved.
            </Text>
          </div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
