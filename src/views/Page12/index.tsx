import {useEffect,useLayoutEffect, useState} from 'react'
import {Button} from 'antd'
import Page13 from '../Page13'
const Page12 = () =>{
    let [num,setNum] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setNum(10)
        },2000)
    })
    // useEffect 异步用法
    /* useEffect(()=>{
        const next = async () =>{
            let data = await queryData()
            console.log('成功',data);
        }
        next()
    },[]) */
    // 连续切换渲染
    // useEffect: 第一次真实DOM已经渲染，组件更新会重新渲染真实的DOM，所以频繁切换的时候，会出现样式/内容的闪烁
    // 对于useLayoutEffect：第一次真实DOM还未渲染，遇到callback中修改了状态，视图
    //立即更新,创建出新的Vdom，然后和上一次的VDOM合并在一起渲染为真实DOM
    // useLayoutEffect执行优先于useEffect
    return (
        <div>
            <Page13 num={num}/>
            <span className='num' style={{color:num === 0 ? 'red' : 'green'}}>{num}</span>
            <Button type='primary' size="small" onClick={()=>{ setNum(0) }} />
        </div>
    )
}

export default Page12;