import React,{useState,memo,useContext} from 'react';
import {Button} from 'antd';
import ThemeContext from './ThemeContext';
const VoteFooter = ()=>{
    let [state,setState] = useState(10)
    let {change} = useContext(ThemeContext)
    const handle = ()=>{}
    return <div className="footer">
    <Button type='primary' onClick={() => change('sup')}>支持</Button>
    <Button type='primary' danger onClick={() => change('opp')}>反对</Button>
</div>
}

export default memo(VoteFooter);