import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    background: "linear-gradient(135deg, rgba(250, 155, 255, 1), rgba(196, 189, 255, 0.56), rgba(172, 151, 184, 1))",
  },
  divImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  img: {
    width: '50%',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    background: "rgba(255, 255, 255, 0.3)",
    padding: '2rem',
    borderRadius: '1rem',
  },
  inputField: {
    width: '80%',
    fontFamily: "'Lobster', sans-serif",
    fontWeight: "normal",
  },
  formHeader: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    fontFamily: "'Lobster', sans-serif",
    fontWeight: 600,
  },
  buttonContainer: {
    textAlign: 'center',
    backgroundColor: '#e136c6',
    fontSize: "2rem",
    borderRadius: "1rem",
    padding: "1rem",
    fontFamily: "'Lobster', sans-serif",
    textShadow: "0.1rem 0.1rem 0.5rem #561290",
    transition: 'background-color 0.3s ease',
  },
  label: {
    fontFamily: "'Lobster', sans-serif",
    fontSize: '16px',
  },
  checkbox: {
    fontFamily: "'Lobster', sans-serif",
    fontWeight: 600,
  },
};

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SignIn = () => (
  <Form style={styles.container}>
    <div style={styles.divImg}>
      <img
        src="https://raw.githubusercontent.com/DanielJoaco/e-commerce/refs/heads/main/src/assets/logo.png"
        alt="logo"
        style={styles.img}
      />
    </div>
    <Form
      style={styles.formContainer}
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
        <h1 style={styles.formHeader}>Iniciar Sesión</h1>
    </Form.Item>
      <Form.Item
        label={<span style={styles.label}>Usuario</span>}
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input style={styles.inputField} />
      </Form.Item>

      <Form.Item
        label={<span style={styles.label}>Contraseña</span>}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password style={styles.inputField} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox style={styles.checkbox}>Recuerdame</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={styles.buttonContainer}>
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  </Form>
);

export default SignIn;
