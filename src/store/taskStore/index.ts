import { makeAutoObservable } from 'mobx'

class TaskStore {
  count = 0 // 定义数据
  constructor() {
    makeAutoObservable(this)  // 响应式处理
  }
  // 定义修改数据的方法
  addCount = () => {
    this.count++
  }
}

const task = new TaskStore()
export  {task,TaskStore}