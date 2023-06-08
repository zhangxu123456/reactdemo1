import react,{lazy,Suspense} from "react"

/* import Home from "@/views/Home"
import About from '@/views/about' */
const App = lazy(()=>import("@/App"))
const Home = lazy(()=>import("@/views/Home"))
const About = lazy(()=>import("@/views/about"))
const Page1 = lazy(()=>import("@/views/Page1"))
const Page2 = lazy(()=>import("@/views/Page2"))
const Page5 = lazy(()=>import("@/views/Page5"))
const Page6 = lazy(()=>import("@/views/Page6"))
const Page7 = lazy(()=>import("@/views/Page7"))
const Login = lazy(()=>import("@/views/Login"))
const Page8 = lazy(()=>import("@/views/Page8"))
const Page9 = lazy(()=>import("@/views/Page9"))
const Page10 = lazy(()=>import("@/views/Page10"))

// 懒加载需要我们给一个

// Navigate重定向组件
import { Navigate } from "react-router-dom"
const lazyLoad = (children:JSX.Element) =>{
    return <Suspense fallback={<>loading</>}>{children}</Suspense>
}
const routes = [
    {
        path:"/",
        element:<Navigate to="/page1" />
    },
    {
        path:"/",
        element:<Home />,
        children:[
            {
                path:"/page1",
                element:lazyLoad(<Page1/>)
            },
            {
                path:"/page2",
                element:lazyLoad(<Page2/>)
            },
            {
                path:"/page3/page301",
                element:lazyLoad(<About/>)
            },
            {
                path:"/page5",
                element:lazyLoad(<Page5/>)
            },
            {
                path:"/page6",
                element:lazyLoad(<Page6/>)
            },
            {
                path:"/page7",
                element:lazyLoad(<Page7/>)
            },
            {
                path:"/page8",
                element:lazyLoad(<Page8/>)
            },
            {
                path:"/page9",
                element:lazyLoad(<Page9/>)
            },
            {
                path:"/page10",
                element:lazyLoad(<Page10/>)
            },

        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"*",
        element:<Navigate to="/page1" />
    }
]

export default routes