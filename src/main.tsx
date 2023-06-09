import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式
import "reset-css";
// UI组件全局样式

// 全局样式
import "@/assets/styles/global.scss";
import App from './App'
import {BrowserRouter} from "react-router-dom"
//import Router from '@/router/index'
// 转态管理
import {Provider} from "react-redux"
import store from  "@/store"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
)
