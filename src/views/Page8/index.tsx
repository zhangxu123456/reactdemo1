import React, { useState, useCallback, useEffect } from 'react';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';

const Page8 = () => {
    let [supNum, setSupNum] = useState(10),
        [oppNum, setOppNum] = useState(0);
    let [arr, setArr] = useState([1, 2, 3])
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
    }, [supNum, oppNum]);
    const onClickHandle = () =>{
        arr.push(5)
        setArr(arr)
    }
    return (
        <div className='vote-box'>
            <p onClick={onClickHandle}>react学习{arr}</p>
            <VoteMain supNum={supNum} oppNum={oppNum} />
            <VoteFooter change={change} />
        </div>
    )
}

export default Page8