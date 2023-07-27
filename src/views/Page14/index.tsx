import React,{useRef,forwardRef, useImperativeHandle, useEffect} from 'react'

 const Page14 = () =>{
    const sonRef = useRef(null)
    useEffect(()=>{
        console.log(sonRef)
    },[])
    return  (
        <>
        <p onClick={()=> sonRef.current.reset()}>打印</p>
        <SonComponent ref={sonRef} value='这是子组件的value值' />
    </>

    )
}

const SonComponent = forwardRef((props,refparams) =>{
    const handle = ()=> {console.log('清楚')}
    const sonRef = useRef()
    useImperativeHandle(refparams,()=>{
        return {
            reset:handle
        }
    })
    return (<>
        <div>
            <input type="text" defaultValue={props.value} ref={sonRef} />
            <button onClick={() => console.log(sonRef.current)}>点击打印ref</button>
        </div>
    </>)

})

export default Page14