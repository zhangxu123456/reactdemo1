import { makeAutoObservable,makeObservable } from 'mobx'

class CounterStore {
  count = 0 // 定义数据
  arrList:arrListTs[] = []
  constructor() {
    makeAutoObservable(this,{})  // 响应式处理
  }
  // 定义修改数据的方法
  addCount = (num:number) => {
    this.count = this.count + num;
  }
  addArrList = (arrList:arrListTs) =>{
    this.arrList.push(arrList)
  }
  editArrList = (arrList:arrListTs[]) =>{
    this.arrList = arrList
  }
}

const counter = new CounterStore()
export {counter,CounterStore} 