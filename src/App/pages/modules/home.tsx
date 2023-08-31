import { Link } from "react-router-dom";


const home1 = {
    prem:PREM_PATH.HOME,
    path:'/home/topic',
    title:'首页',
    element: <HomeReport/>
    handle:{
        crumb:()=>[{
            title: <Link to="/home">首页</Link>
        }]
    },
    children: [{
        path: `/home/topic/msg`,
        title: '消息',
        element: <Msg/>,
        handle:{
            crumb:()=>[{
                title: <span>消息</span>
            }]
    }]
}