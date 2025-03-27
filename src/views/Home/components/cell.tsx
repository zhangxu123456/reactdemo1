import { useRef, useState } from 'react'
import  './index.scss'
// let step = 0
class MyClass {
    private myProperty:string
    constructor(myProperty:string){
        this.myProperty = myProperty
    }
}
const Cells:React.FC<{cell:number,ruleArr:Array<Array<number>>}> =  (props) =>{
    const initCells = Array(Math.pow(props?.cell,2)).fill(null)?.map((item,index) =>{
        return {
            key: index + 1,
            step:0
        }
    })
    
    // const [step,setStep] = useState(0)
    const step = useRef(0)
    const [cells,setCells] = useState(initCells)
    const [arr1,setArr1] = useState<number[]>([])
    const [arr2,setArr2] = useState<number[]>([])
    const click = (index:number) => {
        step.current = step.current + 1
        const changCells = cells.map((item) => {
            if (item.key === index) {
                item.step = step.current
            }
            return item
        })
        console.log('index % 2 === 0',step);
        
        if(step.current % 2 === 0){
            setArr1([...arr1,index])
            const winner = props.ruleArr?.some((items: number[]) => {
                return items.every(item => {
                    return arr1.includes(item)
                })
            })
            console.log('winner',winner);
            
        }else{
            setArr2([...arr2,index])
        }
        setCells(changCells)
        
        
    }
    return (
        <div className="cells">
            {
                cells.map((item, index) => (
                    <div onClick={()=>click(index+1)} key={index} className="cell-item">
                        { item.step !== 0 &&  (item.step % 2 === 0 ? 'X' : '√')}
                    </div>
                ))
            }
        </div>
    )
}

export default Cells