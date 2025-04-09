import { useState } from 'react';
import styles from './index.module.less'
import { Button, Form, Input } from 'antd';

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.loginTop}>登录</div>
                <div>
                    <Form
                        name="wrap"
                        labelCol={{ flex: '110px' }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}
                        colon={false}
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item label="用户名" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="密码" name="password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item className={styles.loginBtn} >
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;