import React from 'react';
import { Button, Cascader, Checkbox, Form, Input, Select } from 'antd';

const { Option } = Select;

const residences = [
  {
    value: 'Colombia',
    label: 'Colombia',
    children: [
      {
        value: 'Santander',
        label: 'Santander',
        children: [
          { value: 'Bucaramanga', label: 'Bucaramanga' },
          { value: 'Girón', label: 'Girón' },
          { value: 'Floridablanca', label: 'Floridablanca' },
          { value: 'Piedecuesta', label: 'Piedecuesta' },
        ],
      },
    ],
  },
];

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
    ':hover': {
        backgroundColor: 'rgba(255, 126, 197, 0.8)',
    },
  },
  label: {
    fontFamily: "'Lobster', sans-serif",
    fontSize: '16px',
  },
  dropdown: {
    fontFamily: "'Lobster', sans-serif",
    fontWeight: 600,
  },
  checkbox: {
    fontFamily: "'Lobster', sans-serif",
    fontWeight: 600,
  },
};

const SignUp = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70, ...styles.dropdown }}>
        <Option value="57">+57</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form style={styles.container}>
        <div style={styles.divImg}>
        <img src="https://raw.githubusercontent.com/DanielJoaco/e-commerce/refs/heads/main/src/assets/logo.png" alt="logo" style={styles.img} />
        </div>
        <Form
        style={styles.formContainer}
        {...{
            labelCol: { xs: { span: 24 }, sm: { span: 8 } },
            wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
        }}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            residence: ['Colombia', 'Santander', 'Bucaramanga'],
            prefix: '57',
        }}
        scrollToFirstError
        >
        <Form.Item {...{ wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } } }}>
            <h1 style={styles.formHeader}>Registrarse</h1>
        </Form.Item>

        <Form.Item
            name="email"
            label={<p style={styles.label}>E-mail</p>}
            rules={[
            { type: 'email', message: 'Ingresa un email válido' },
            { required: true, message: 'Por favor ingresa tu email' },
            ]}
        >
            <Input style={styles.inputField} />
        </Form.Item>

        <Form.Item
            name="password"
            label={<span style={styles.label}>Contraseña</span>}
            rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
            hasFeedback
        >
            <Input.Password style={styles.inputField} />
        </Form.Item>

        <Form.Item
            name="confirm"
            label={<span style={styles.label}>Confirma tu contraseña</span>}
            dependencies={['password']}
            hasFeedback
            rules={[
            { required: true, message: 'Por favor confirma tu contraseña' },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('Las contraseñas no coinciden'));
                },
            }),
            ]}
        >
            <Input.Password style={styles.inputField} />
        </Form.Item>

        <Form.Item
            name="nickname"
            label={<span style={styles.label}>Nombre de usuario</span>}
            tooltip="¿Cómo deberíamos llamarte?"
            rules={[
            { required: true, message: 'Por favor ingresa tu nombre de usuario', whitespace: true },
            ]}
        >
            <Input style={styles.inputField} />
        </Form.Item>

        <Form.Item
            name="residence"
            label={<span style={styles.label}>Ciudad</span>}
            rules={[{ type: 'array', required: true, message: 'Por favor ingresa tu ciudad' }]}
        >
            <Cascader options={residences} style={{ ...styles.inputField, ...styles.dropdown }} />
        </Form.Item>

        <Form.Item
            name="phone"
            label={<span style={styles.label}>Número de celular/whatsapp</span>}
            rules={[{ required: true, message: 'Por favor ingresa tu número de celular/whatsapp' }]}
        >
            <Input addonBefore={prefixSelector} style={styles.inputField} />
        </Form.Item>

        <Form.Item
            name="gender"
            label={<span style={styles.label}>Género</span>}
            rules={[{ required: true, message: 'Por favor selecciona tu género' }]}
        >
            <Select
            placeholder="Selecciona tu género"
            style={{ ...styles.inputField, ...styles.dropdown }}
            >
            <Option value="male">Masculino</Option>
            <Option value="female">Femenino</Option>
            <Option value="other">Otro</Option>
            </Select>
        </Form.Item>

        <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
            {
                validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Debes aceptar los términos')),
            },
            ]}
            {...{ wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } } }}
        >
            <Checkbox style={styles.checkbox}>
            Acepto los <a href="#">términos y condiciones</a>
            </Checkbox>
        </Form.Item>

        <Form.Item {...{ wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } } }}>
            <Button type="primary" htmlType="submit" style={styles.buttonContainer}>
            Registrarse
            </Button>
        </Form.Item>
        </Form>
        </Form>
  );
};

export default SignUp;
