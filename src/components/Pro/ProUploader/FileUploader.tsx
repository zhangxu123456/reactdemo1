// components/OssUpload.js
import React, { useState, useMemo } from 'react';
import { Upload, message, Button, Image, Modal } from 'antd';
import OSS from 'ali-oss';
import { UploadOutlined } from '@ant-design/icons';
import { CommonService } from '@/services/common.ts';

const OssUpload = ({ children, onSuccess }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [tempImage, setTempImage] = useState(null); // 临时本地图片
    const [uploadProgress, setUploadProgress] = useState(0); // 上传进度
    const [loading, setLoading] = useState(false);
    const [stsToken, setStsToken] = useState(null)
    const expirse = 3600;
    const getBase64 = (file: RcFile): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    // 生成预览图
    const handlePreview = async (file: UploadFile) => {
        const name = file.response.name
        if (name) {
            // file.preview = await getBase64(file.originFileObj as RcFile);
            const url = await CommonService.getFileUrl({ url: name, preview: true })
            console.log('urlurlurlurl', url);

            setPreviewImage(url);
            setPreviewOpen(true);
            setPreviewTitle('预览');
        }

    };
    const handleCancel = () => setPreviewOpen(false);
    let clearTime = null
    const expirseHandle = () => { 
        clearTimeout(clearTime)
        clearTime = setTimeout(() => {
            setStsToken(null)
        }, expirse * 1000);
    };
   
    // 获取STS凭证
    const getStsToken = async () => {
        try {
            const data = await CommonService.getSts();
            setStsToken(data)
            expirseHandle()
            return data;
        } catch (error) {
            message.error('获取上传凭证失败');
            throw error;
        }
    };

    // 上传前处理
    const beforeUpload = async (file) => {
        setLoading(true);

        // 验证文件类型
        const isImage = file.type.startsWith('image/');
        if (!isImage) {
            message.error('只能上传图片文件!');
            setLoading(false);
            return false;
        }

        // 验证文件大小 (2MB)
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('图片大小不能超过2MB!');
            setLoading(false);
            return false;
        }

        return true;
    };

    // 自定义上传实现
    const customRequest = async ({ file, onProgress, onSuccess, onError }) => {
        try {
            // 1. 获取STS凭证
            const getStsTokenHandle = async () => {
                console.log('stsToken',stsToken);
                
                if (!stsToken) {
                    const data = await getStsToken();
                    return data
                } else {
                    return stsToken
                }
            };
            const credentials = await getStsTokenHandle()
            console.log('credentials', credentials);


            // 2. 初始化OSS客户端
            const client = new OSS({
                accessKeyId: credentials.AccessKeyId,
                accessKeySecret: credentials.AccessKeySecret,
                stsToken: credentials.SecurityToken,
                region: credentials.region, // 与Egg.js返回的region一致
                bucket: credentials.bucket, // 与Egg.js返回的bucket一致
                secure: true, // 使用HTTPS
                // cname: false, // 不使用自定义域名
                refreshSTSToken: async () => {
                    const newCredentials = await getStsToken();
                    return {
                        accessKeyId: newCredentials.accessKeyId,
                        accessKeySecret: newCredentials.accessKeySecret,
                        stsToken: newCredentials.securityToken
                    };
                },
                refreshSTSTokenInterval: 300000 // 5分钟刷新一次token
            });

            // 3. 生成唯一文件名
            const filename = `/images/${Date.now()}_${file.name}`;

            // 4. 上传文件
            const result = await client.put(filename, file);

            // 5. 显示图片 (使用公共读URL)
            const url = result.url;
            setImageUrl(url);
            onSuccess(result, file);
            message.success('上传成功');
        } catch (error) {
            console.error('上传失败:', error);
            onError(error);
            message.error('上传失败');
        } finally {
            setLoading(false);
        }
    };

    // 上传
    const handleChange = (info) => {
    };
    return (
        <div>
            <Upload
                listType="picture-card"
                accept="image/*"
                beforeUpload={beforeUpload}
                onChange={handleChange}
                customRequest={customRequest}
                onPreview={handlePreview}
            >
                上传
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
    );
};

export default OssUpload;