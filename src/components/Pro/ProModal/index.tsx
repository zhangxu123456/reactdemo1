import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Modal, message } from 'antd';
import { omit } from 'loadsh';


export const useProModal = () => {
    const isModalOpen = false
    const forOpenCallList = []
    const forConfirmCallList = []
    const ProModalRef = useRef(null);
    const ChildComRef = useRef(null);
    const ctx = {
        ProModalRef,
        ChildComRef,
        context: {}
    }

    let setVisibleCopy = () => { }

    const open = async () => {
        const closeLoading = message.loading('加载中...', 0)
        try {
            await forOpenCallList?.[0]?.(ctx)
            setVisibleCopy(true)
        } catch (error) {
            console.log(error, '错误')
        } finally {
            closeLoading()
        }
    }

    const forOpen = (call) => {
        forOpenCallList.push(call)
        return dialog
    }
    const forConfirm = (call) => {
        forConfirmCallList.push(call)
        return dialog
    }
    const ProModal = (props) => {
        const [visible, setVisible] = useState(false); // 弹框状态
        const [confirmLoading, setConfirmLoading] = useState(false); // 按钮loading状态
        
        setVisibleCopy = setVisible;
        const handleOk = async () => {
            try {
                setConfirmLoading(true)
                await forConfirmCallList?.[0]?.(ctx)
                setVisible(false)
            } catch (error) {
                console.log(error)
            } finally {
                setConfirmLoading(false)
            }
        }
        const handleCancel = () => {
            setConfirmLoading(false)
            setVisible(false)
            ctx.ChildComRef.current.resetFields()
        }
        return (
            <Modal
                open={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                confirmLoading={confirmLoading}
                ref={ProModalRef}
                {
                ...props
                }
            >
                {React.cloneElement(props.children, { ctx })}
            </Modal>
        )
    }
    const dialog = {
        open,
        forOpen,
        forConfirm,
        ProModal
    }
    return {
        dialog,
        ProModal
    }
};
