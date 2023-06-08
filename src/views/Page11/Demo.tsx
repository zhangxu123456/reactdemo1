/* 
React高阶组件：利用JS中闭包[柯理化函数]实现的组件代理
*/
import React from 'react';

const Demo = ()=>{
    return (
        <div className='demo'>
            我是Demo
        </div>
    )
}

const ProxyTest = (Component)=>{
    return function HOC(props){
        let isUse = false;
        let {x,y,enable} = props
        //return <Component x={x}/>
        return <Component {...props} isUse={isUse}/>
    }
}

export default ProxyTest(Demo)