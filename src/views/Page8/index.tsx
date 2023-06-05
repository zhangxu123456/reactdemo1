import react, { useState, useEffect } from 'react'
import { flushSync } from 'react-dom'

const Page8 = () => {
    console.log('渲染');
    let [x, setX] = useState(0)
    let [y, sety] = useState(0)
    let [z, setz] = useState(0)
    /* useEffect(()=>{
        console.log(123);
        return ()=>{
            console.log(x, y);
        }
    },[]) */
    const handle = () => {
        for (let i = 5; i++; i < 10) {
            setX(x + i)
        }
        /* setTimeout(() => {
            setX(x + 1)
            sety(y + 1)
            console.log(x, y);
        }) */
        /* flushSync(()=>{
            setX(10)
            sety(20)
        })
        console.log(x,y);
        setz(x+y) */
    }
    return (
        <div>
            <p onClick={handle}>page8</p>
            <p>{x}</p>
        </div>
    )
}

export default Page8