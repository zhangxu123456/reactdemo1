
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/index1'
import { useEffect, useState, useRef, ChangeEvent } from "react"
import Page5 from './Page5'
const Page2 = () => {
    const { counterStore } = useStore()
    const [name, setNamee] = useState('')
    const [age, setAge] = useState<string | number>('')
    const buttonClick = () => {
        if (typeof age === 'number') {
            counterStore.addArrList({ name, age })
        }
    }
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setNamee(e.target.value)
    }
    const changeAge = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            const age = Number(e.target.value)
            setAge(age)
        }
    }
    return (
        <div>
            <input value={name} onChange={changeName} type="text" />
            <input value={age} onChange={changeAge} type="text" />
            <button onClick={buttonClick}>按钮</button>
            <hr />
            <div><Page5 /></div>
        </div>
    )
}

export default observer(Page2)