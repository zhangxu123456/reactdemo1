import styles from "@/views/Login/login.module.scss"
import { Input, Space, Button } from "antd"
import { ChangeEvent, useEffect, useState } from "react"
import {captchaAPI,LoginAPI} from '../../request/api'



const view = () => {
    const [usenameVal,setUsernameVal] = useState("")
    const [codeVal,setCodeVal] = useState('')
    const usenameChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUsernameVal(e.target.value)
    }
    const getCaptchaImg = ()=>{
        captchaAPI().then((res)=>{
            if(res && res.code === 200){
                setCodeVal(`data:image/gif;base64,${res.img}`)
            }
        })
    }
    const gotoLogin =()=>{
        LoginAPI({
            usename:usenameVal,
            password: '123456',
            code:codeVal,
            uuid: '321456'
        }).then((res)=>{
        })
    }
    return (
        <div className={styles.loginPage}>
            <div className="from">
                <Space dircetion="vertical" size="large" style={{ display: 'flex' }} >
                    <Input placeholder="用户名" onChange={usenameChange} />
                    <Input placeholder="密码" />
                    <div onClick={getCaptchaImg}>
                        111
                        <img height="38" src={codeVal} alt="" />
                    </div>
                    <Button type="primary" onClick={gotoLogin}>登录</Button>
                </Space>
            </div>
        </div>
    )
}

export default view