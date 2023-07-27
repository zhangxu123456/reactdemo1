import Main from '@/App/pages/Home';
const home = {
    path: '/home',
    title: '首页',
    element: <Main/>,
    Children:[
        {
            path: '/home/index1',
            title: '首页',
            element: <Main/>
        }
    ]
}