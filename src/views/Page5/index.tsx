import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { observable,toJS } from 'mobx'
import { Checkbox, Divider, Row, Col, Button } from 'antd';
import { useStore } from '@/store/index1'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import styles from './page5.module.scss'

const Page5 = () => {
    const { counterStore } = useStore()
    useEffect(() => {
    }, [counterStore.count])
    const defaultCheckedList = counterStore.arrList.map((item) => item.name)
    const plainOptions = defaultCheckedList;
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    const onClickButton = () => {

        const arrList = counterStore.arrList.filter((item) => {
            /* if (!checkedList.includes(item.name)) {
                return {
                    name: item.name,
                    age: item.age
                }
            } */
            if(!checkedList.includes(item.name)){
                return toJS(item)
            }
            
        })
        counterStore.editArrList(arrList)
    }
    const obj = [{a:1}]
    const obj1 = observable(obj)

    return (<div>
        {/* {
            counterStore.arrList.map((item,key)=>{
                return <li key={key}><span>{item.name}|{item.age}</span></li>
            })
        } */}
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Check all
        </Checkbox>
        <Divider />
        {/* <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} /> 
        */}
        <Checkbox.Group style={{ width: '100%' }} value={checkedList} onChange={onChange}>
            <div className={styles.Page5}>
                {
                    counterStore.arrList.map((item, key) => {
                        return (
                            <li key={key}>
                                <Col span={8} >
                                    <Checkbox value={item.name}>{item.age}</Checkbox>
                                </Col>
                            </li>
                        )
                    })
                }
            </div>
        </Checkbox.Group>
        <div><Button onClick={onClickButton} type="primary">删除</Button></div>

    </div>)
}

export default observer(Page5)