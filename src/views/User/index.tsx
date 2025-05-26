import React from 'react';
import { Form, Input, InputNumber, DatePicker, Upload, Radio, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import { useProModal } from '@/components/Pro/ProModal';
const User = () => {
  const [form] = Form.useForm();
  const { ProModal, dialog } = useProModal();

  const onFinish = (values: any) => {
    console.log('表单提交的值:', values);
    message.success('提交成功！');
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleClick = () => {
    console.log(11111111)
    dialog.forOpen(async (ctx) => {
      console.log('打开成功', ctx);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          ctx.value = 123
          resolve(true);
        }, 2000);
      });
    }).forConfirm(async (ctx) => {
      console.log('确认成功', ctx.ProModalRef.current);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      });
    }).open()
  };

  const ChildCom = (props) => {
    console.log('childCom', props);

    return <div>childCom</div>
  }
  const modalProps = {
    title: '用户信息录入',
    width: 800,
  }
  const childProps = {
    zx: 123
  }
  return (
    <div className='p-11'>
      <ProModal {...modalProps}>
        <ChildCom {...childProps}></ChildCom>
      </ProModal>
      <Button type="primary" onClick={() => handleClick()}>按钮</Button>
      {/* <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: '请输入姓名' }]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>

        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: '请输入年龄' }]}
        >
          <InputNumber min={18} max={100} placeholder="请输入年龄" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="性别"
          name="gender"
          rules={[{ required: true, message: '请选择性别' }]}
        >
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="入职时间"
          name="joinDate"
          rules={[{ required: true, message: '请选择入职时间' }]}
        >
          <DatePicker style={{ width: '100%' }} placeholder="请选择入职时间" />
        </Form.Item>

        <Form.Item
          label="照片"
          name="picture"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: '请上传照片' }]}
        >
          <Upload
            listType="picture"
            maxCount={1}
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />}>上传照片</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form> */}
    </div>
  );
};

export default User; 