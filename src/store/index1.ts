import React from 'react'

import {counter,CounterStore} from './counterStore'
import {task,TaskStore} from './taskStore'

class RootStore {
  counterStore:CounterStore
  taskStore:TaskStore
  constructor() {
    this.counterStore = counter
    this.taskStore = task
  }
}


const rootStore = new RootStore()

// context机制的数据查找链  Provider如果找不到 就找createContext方法执行时传入的参数
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)
// useStore() =>  rootStore  { counterStore, taskStore }

export { useStore }