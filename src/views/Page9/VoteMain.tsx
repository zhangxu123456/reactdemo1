import React, { useState, useMemo,useContext } from 'react';
import ThemeContext from './ThemeContext';
const VoteMain = () => {
    let { supNum, oppNum } = useContext(ThemeContext);
    /* 
        + 第一次渲染组件的时候,callback会执行
        + 后期只有依赖的状态值发生改变,callback才会再执行
        + 每一次会把callback执行的返回结果赋值给xxx
        + useMemo具备缓存的效果，在依赖的状态值没有发生改变，callback没有触发执行的时候，XXX湖区的是上一次计算出来的结果“计算缓存”
        和vue中的commted计算属性相似
    */
    let ratio = useMemo(() => {
        let ratio = '--',
            total = supNum + oppNum;
        if (total > 0) ratio = (supNum / total * 100).toFixed(2) + '%';
        return ratio;
    }, [supNum, oppNum])

    return (
        <div className='main'>
            <p>支持人数:{supNum}人</p>
            <p>反对人数:{oppNum}人</p>
            <p>支持比率:{ratio}</p>
        </div>
    )
}


export default VoteMain;