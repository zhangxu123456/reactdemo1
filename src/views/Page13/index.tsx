import {useEffect, useState} from 'react'
let num1:any = []
const Page13 = ({num})=>{
    const  [num1,setNum1] = useState([num])
    // const [ids,setIds] = useState([])
    // useEffect(()=>{
    //     let num = 10
    //     init(num)
    // })
    // const init = (num:any) =>{
    //     num1 = [1]
    // }
    // const init2 = () =>{
    //     console.log(num1)
    // }
    useEffect(()=>{
        console.log(num,22222222)
    },[num])
    return (
        // <p onClick={init2}>111111</p>
        <p>111111</p>
    )
}

export default Page13;