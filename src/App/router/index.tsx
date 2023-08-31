import { createHashRouter } from "react-router-dom";
import loadable from '@loadable/component';
import home from './modules/home1';
const App = loadable(() => import('@/App'))

export const routes = [{
    path: '/',
    element: <App/>,
    children:[
        home1,
    ]
}]



export default createHashRouter(routes)