import React from 'react';
import { Button, Cascader, Checkbox, Form, Input, Select } from 'antd';
import '../styles/SignStyles.css';

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

const SignUp = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="57">+57</Option>
      </Select>
    </Form.Item>
  );

  return (
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
          <h1 className="formHeader">Registrarse</h1>
        </Form.Item>

        <Form.Item
          name="email"
          label={<p className="label">E-mail</p>}
          rules={[
            { type: 'email', message: 'Ingresa un email válido' },
            { required: true, message: 'Por favor ingresa tu email' },
          ]}
        >
          <Input className="inputField" />
        </Form.Item>

        <Form.Item
          name="password"
          label={<span className="label">Contraseña</span>}
          rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
          hasFeedback
        >
          <Input.Password className="inputField" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label={<span className="label">Confirma tu contraseña</span>}
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
          <Input.Password className="inputField" />
        </Form.Item>

        <Form.Item
          name="nickname"
          label={<span className="label">Nombre de usuario</span>}
          tooltip="¿Cómo deberíamos llamarte?"
          rules={[
            { required: true, message: 'Por favor ingresa tu nombre de usuario', whitespace: true },
          ]}
        >
          <Input className="inputField" />
        </Form.Item>

        <Form.Item
          name="residence"
          label={<span className="label">Ciudad</span>}
          rules={[{ type: 'array', required: true, message: 'Por favor ingresa tu ciudad' }]}
        >
          <Cascader options={residences} className="inputField" />
        </Form.Item>

        <Form.Item
          name="phone"
          label={<span className="label">Celular/whatsapp</span>}
          rules={[{ required: true, message: 'Por favor ingresa tu número de celular/whatsapp' }]}
        >
          <Input addonBefore={prefixSelector} className="inputField" />
        </Form.Item>

        <Form.Item
          name="gender"
          label={<span className="label">Género</span>}
          rules={[{ required: true, message: 'Por favor selecciona tu género' }]}
        >
          <Select
            placeholder="Selecciona tu género"
            className="inputField"
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
          <Checkbox className="checkbox">
            Acepto los <a href="#">términos y condiciones</a>
          </Checkbox>
        </Form.Item>

        <Form.Item {...{ wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } } }}>
          <Button type="primary" htmlType="submit" className="buttonContainer">
            Registrarse
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
