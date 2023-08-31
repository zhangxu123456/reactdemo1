import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式
import "reset-css";
// UI组件全局样式

// 全局样式
import "@/assets/styles/global.scss";
import App from './App'
import {BrowserRouter, RouterProvider} from "react-router-dom"
//import Router from '@/router/index'
// 转态管理
import store from  "@/store"
import router from './App/router'

import {Provider} from 'mobx-react';
import {rootState} from './App/stateManager'
import routes from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store} rootState={rootState}>
    {/* <BrowserRouter> */}
      {/* <App /> */}
    {/* </BrowserRouter> */}
    <RouterProvider router={router} />
    </Provider>
)
