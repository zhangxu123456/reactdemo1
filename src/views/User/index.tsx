import React from 'react';
import { Form, Input, InputNumber, DatePicker, Upload, Radio, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useProModal } from '@/components/Pro/ProModal';
import UserForm from './components/userForm';
import {UserService} from '../../services/user';

const User = () => {
  const { ProModal, dialog } = useProModal();
  
  const handleClick = () => {
    dialog.forOpen(async (ctx) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          ctx.value = 123
          resolve(true);
        }, 2000);
      });
    }).forConfirm(async (ctx) => {
      const { promise, reject, resolve } = Promise.withResolvers()
      try {
        await ctx.ChildComRef.current.validateFields()
        ctx.ChildComRef.current.submit()
        console.log('ssssss', ctx.context.values);
        const data = await UserService.createUser(ctx.context.values)
        resolve(true);
      } catch (error) {
        console.log('wwww');
        reject(error)
      } finally {
      }
      return promise
    }).open()
  };

  const ChildCom = (props) => {
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
        <UserForm {...childProps}></UserForm>
      </ProModal>
      <Button type="primary" onClick={() => handleClick()}>录入</Button>
    </div>
  );
};

export default User; 