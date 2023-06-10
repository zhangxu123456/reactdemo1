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
/* 
    memo 
    + 针对组件进行优化
    + 传递给组件props的堆内存没有进行改变，则组件不进行重新渲染
*/
export default memo(VoteFooter);