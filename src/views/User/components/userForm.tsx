import { Form, Input, InputNumber, Radio, Upload, Button, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import OSSUpload from '@/components/Pro/ProUploader/FileUploader';
export default (props) => {
    const [form] = Form.useForm();
    const { ChildComRef } = props.ctx;
    const onFinish = (values: any) => {
        console.log('表单提交的值:', values);
        props.ctx.context.values = values
    };
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return <div>
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            ref={ChildComRef}
            clearOnDestroy={true}
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
                <OSSUpload />
                {/* <Upload
                    listType="picture"
                    maxCount={1}
                    beforeUpload={() => false}
                >
                    <Button icon={<UploadOutlined />}>上传照片</Button>
                </Upload> */}
            </Form.Item>
        </Form>
    </div>
} 