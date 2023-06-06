import React,{useState,memo} from 'react';
import {Button} from 'antd';

const VoteFooter = ({change})=>{
    let [state,setState] = useState(10)
    const handle = ()=>{}
    return <div className="footer">
    <Button type='primary' onClick={() => change('sup')}>支持</Button>
    <Button type='primary' danger onClick={() => change('opp')}>反对</Button>
</div>
}

export default memo(VoteFooter);