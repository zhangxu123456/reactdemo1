import styles from '@/components/Comp3/Jing.module.scss'
import { useState } from 'react'
const count = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const list = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]]
let items1: number[] = []
let items2: number[] = []
const Jing = () => {
    const [num, setNum] = useState(0)
    const clickHandle = (item: number) => {
        
        if (num % 2 === 0) {
            console.log("x")
            if (items1.includes(item)) {
                return false
            } else {
                items1.push(item)
            }
            list.forEach(values => {
                let total = 0
                items1.forEach(v => {
                    if (values.includes(v)) {
                        total++
                        if (total >= 3) {
                            console.log('ccccccc')
                        }
                    }
                })
                if(total === 3){
                    console.log('x赢')
                }
            })
        } else {
            console.log("y")
            if (items2.includes(item)) {
                return false
            } else {
                items2.push(item)
            }
            list.forEach(values => {
                let total = 0
                items2.forEach(v => {
                    if (values.includes(v)) {
                        total++
                        if (total >= 3) {
                            console.log('ccccccc')
                        }
                    }
                })
                if(total === 3){
                    console.log('y赢')
                }
            })
        }
        
        setNum(num + 1)
    }
    return (
        <div>
            <h1>轮到{num % 2 === 0 ? 'x' : 'y'}走</h1>
            <br />
            <div className={styles.Jing}>
                {
                    count.map((item, key) => {
                        return <li className={styles.gezi} key={key} onClick={() => clickHandle(item)}>{item}</li>
                    })
                }
            </div>
        </div>
    )
}

export default Jing