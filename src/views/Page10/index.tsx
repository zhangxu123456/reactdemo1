import React, { useState } from 'react';
import {Button} from 'antd';
/* 
    自定义HOOK
    作用：提取封装一些功能的处理逻辑
    用法：创建一个函数，名字需要是useXXX,后期就可以在组件中调用这个方法
*/
const usePartiaState = function usePartiaState(initialValie){
    let [state,setState] = useState(initialValie)
    // setState:不支持部分状态更改
    // setPartial:我们期望这个方法可以支持部分状态更改
    const setPartial = function setPartial(partialState){
        setState({
            ...state,
            ...partialState
        })
    }
    return [state,setPartial]
}

const Page10 = () => {
    const [state, setPartia] = usePartiaState({
        supNum:10,
        oppNum:5
    })
    const change = (type) => {
        if(type === 'sup'){
            setPartia({
                supNum:state.supNum+1
            });
            return;
        }
        setPartia({
            oppNum:state.supNum+1
        });
    }
    return <p onClick={change}>{state.supNum}</p>
}

export default Page10