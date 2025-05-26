import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Modal, message } from 'antd';
import { omit } from 'loadsh';

interface ProModal {
    dialog: {
        open: () => void;
        forOpen: () => void;
        forConfirm: () => void;
    }
}
export const zx = () => {
    const [open, setOpen] = useState('false')

    return <div>zx{open}</div>
};
export const useProModal = () => {
    const isModalOpen = false
    const forOpenCallList = []
    const forConfirmCallList = []
    const ProModalRef = useRef(null);
    const ctx = {
        ProModalRef
    }

    let setVisibleCopy = () => { }
    /* const { promise, resolve, reject } = Promise.withResolvers()
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
    }
    const root = createRoot(modalRoot); */

    // let visible = false
    const setOpen = (value) => {
        // visible = value
    }

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
        console.log('forOpen');
        forOpenCallList.push(call)
        setOpen(true)
        return dialog
    }
    const forConfirm = (call) => {
        console.log('forConfirm');
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
            setVisible(false)
        }
        console.log('propsprops', props,omit(props, ['children']));

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
                {props?.children}
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
