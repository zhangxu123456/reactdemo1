import React, { useState, useMemo } from 'react';

const VoteMain = ({ supNum, oppNum }) => {
    let [state, setState] = useState(10)
    let ratio = useMemo(() => {
        let ratio = '--',
            total = supNum + oppNum;
        if (total > 0) ratio = (supNum / total * 100).toFixed(2) + '%';
        return ratio;
    }, [supNum, oppNum])
    return <div className='main'>
        <p>支持人数:{supNum}人</p>
        <p>反对人数:{oppNum}人</p>
        <p>支持比率:{ratio}</p>
    </div>
}


export default VoteMain;