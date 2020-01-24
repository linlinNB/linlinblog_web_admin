// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import styles from './index.less';

// 测试利用react-hooks写法创建表单
const LoginProjectForm = (props) => {
  // 从props中获取Form.Item的装饰器
  const { getFieldDecorator } = props.form;

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('----- 触发了handleSubmit操作，表单收集上来数据 = ', e);
    // 表单校验部分
    const { validateFields } = props.form;
    validateFields((err, values) => {
      if (!err) {
        // console.log('---- 通过表单校验---- ', values);
        props.onSubmit(values);
      } else {
        // console.log('---- 没有通过表单校验 ---- ', err, values);
      }
    });
  };

  return (
    <div className={styles.loginFormContent}>
      <Form onSubmit={handleSubmit}>
        <Form.Item wrapperCol={{ span: 18, offset: 3 }}>
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: '请输入电话号码',
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: '#A0B2C5' }} />}
              placeholder="手机号码"
            />
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 18, offset: 3 }} className={{ color: '#FFF' }}>
          {getFieldDecorator('pwd', {
            rules: [
              {
                required: true,
                message: '请输入密码',
              },
            ],
          })(
            <Input
              type="password"
              prefix={<Icon type="lock" style={{ color: '#A0B2C5' }} />}
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className={styles.loginGroupBtn} />
        </Form.Item>
      </Form>
    </div>
  );
};

const loginProjectForm = Form.create()(LoginProjectForm);

export default loginProjectForm;
