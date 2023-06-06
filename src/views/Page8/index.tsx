import React, { useState, useCallback, useEffect } from 'react';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';

const Page8 = () => {
    let [supNum, setSupNum] = useState(10),
        [oppNum, setOppNum] = useState(0);
        console.log('更新');

    const change = useCallback((type) => {
        let total = 1
        total = total + 1
        console.log(total);
        if (type === 'sup') {
            setSupNum(supNum + 1)
            return;
        }
        setOppNum(oppNum + 1)
    }, [supNum,oppNum]);
    return (
        <div className='vote-box'>
            <p>react学习</p>
            <VoteMain supNum={supNum} oppNum={oppNum} />
            <VoteFooter change={change} />
        </div>
    )
}

export default Page8