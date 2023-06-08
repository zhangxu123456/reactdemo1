import React, { useState, useCallback, useEffect } from 'react';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import ThemeContext from './ThemeContext.js';
const Page9 = () => {
    let [supNum, setSupNum] = useState(10),
        [oppNum, setOppNum] = useState(0);
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