import { useRef, useEffect, forwardRef, useImperativeHandle, useState } from 'react'
const Dialog = function Dialog(props, ref) {
    let { title, content, children } = props;
    let [num, setNum] = useState(0)
    const domRe = useRef(null)
    useEffect(() => {
        console.log(domRe.current);
    })
    console.log(321);
    const handle = () => {
        console.log(123);
        setNum(num + 1)
        setTimeout(() => {
            console.log(num);
        }, 2000)
    }
    // 将子组件handle传递给父组件
    useImperativeHandle(ref, () => {
        return {
            handle,
        }
    })

    return (
        <div className="dialog-box">
            <div className="header">
                <h2 className="title">{title}</h2>
                <span onClick={() => handle()}>X1111111111</span>
            </div>
            <div className="main" ref={domRe}>
                {content}
            </div>
            {children.length > 0 ? <div className="footer">
                {children}
            </div> : null}
            <p>{num}</p>
        </div>
    )
}
export default forwardRef(Dialog);