import React, { useState, useEffect } from 'react'
import styles from './index.module.scss';
import {Button} from 'antd';
import { flushSync } from 'react-dom'
const useDidMount = (title)=>{
    if(!title) title ='React系统课';
    useEffect(()=>{
        document.title = title;
        console.log(13234);
    },[])
} 

const Page8 = () => {
    console.log('渲染');
    let [state,setState] = useState({
        supNum:10,
        oppNum:5
    })
    if(1===1){
        useDidMount('哈哈哈')

    }
    const handle = (type) => {
        if(type === 'sup'){
            setState({
                ...state,
                supNum: state.supNum + 1
            })
            return false;
        }
        setState({
            ...state,
            oppNum:state.oppNum + 1
        })
    }


    
    return (
        <div className='vote-box'>
            <div className='main'>
                <p>支持人数:{state.supNum}人</p>
                <p>反对人数:{state.oppNum}人</p>
            </div>
            <div className="footer">
            <Button type='primary' onClick={()=> handle('sup')}>支持</Button>
            <Button type='primary' danger onClick={()=> handle('opp')}>反对</Button>
        </div>
        </div>
    )
}

export default Page8