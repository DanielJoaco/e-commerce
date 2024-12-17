import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import '../styles/SignStyles.css';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SignIn = () => (
  <div className="container">
    <div className="divImg">
      <img
        src="https://raw.githubusercontent.com/DanielJoaco/e-commerce/refs/heads/main/src/assets/logo2.png"
        alt="logo"
        className="img"
      />
    </div>
    <Form
      className="formContainer"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item {...{ wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } } }}>
        <h1 className="formHeader">Iniciar Sesión</h1>
      </Form.Item>
      <Form.Item
        label={<span className="label">Usuario</span>}
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input className="inputField" />
      </Form.Item>

      <Form.Item
        label={<span className="label">Contraseña</span>}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password className="inputField" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox className="checkbox">Recuerdame</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="buttonContainer">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default SignIn;