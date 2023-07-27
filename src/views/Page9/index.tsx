import React, { useState, useCallback, useEffect } from 'react';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import ThemeContext from './ThemeContext.js';
const Page9 = () => {
    let [supNum, setSupNum] = useState(10),
        [oppNum, setOppNum] = useState(0);
    /* 
        useCallback: 
        + 针对函数优化
        + 每次组件重新执行都会将内部函数重新执行一次，如果加上依赖
        + 则依赖变化才会进行更新
        + 如果依赖为[] ，则不会再创建新函数，或者说可以始终获取第一次创建函数的堆内存(或者函数的引用)
    */
    const change = useCallback((type) => {
        if (type === 'sup') {
            setSupNum(supNum + 1)
            return;
        }
        setOppNum(oppNum + 1)
    }, [supNum, oppNum]);
    return (
        <ThemeContext.Provider
            value={{
                supNum,
                oppNum,
                change
            }}
        >
            <div className='vote-box'>
                <p>react学习</p>
                <p>{supNum + oppNum}</p>
                <VoteMain />
                <VoteFooter />
            </div>
        </ThemeContext.Provider>
    )
}

export default Page9;