"use client";
import React from 'react';
import {
  Button,
  Cascader,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Row,
  Segmented,
  Select,
  TreeSelect,
} from 'antd';

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};


const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
   <div style={{ padding: '40px', margin: '0 auto' }}>
    <Row>
  <Col xs={24} md={24} lg={12}>
     <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'underlined'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'underlined' }}
    >

      <Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please input your name' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="PhoneNumber"
        rules={[{ required: true, message: 'Please input your phone number' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Message"
        name="Message"
        rules={[{ required: true, message: 'Please input your message' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Mentions"
        name="Mentions"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Mentions />
      </Form.Item>
      <Form.Item
        label="Select"
        name="Select"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Select />
      </Form.Item>
      <Form.Item
        label="Cascader"
        name="Cascader"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Cascader />
      </Form.Item>
      <Form.Item
        label="TreeSelect"
        name="TreeSelect"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <TreeSelect />
      </Form.Item>
      <Form.Item
        label="DatePicker"
        name="DatePicker"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="RangePicker"
        name="RangePicker"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Col>

    <Col xs={24} md={24} lg={12}>
    hi
    </Col>
   </Row>
   </div>

  );
};

export default Contact;