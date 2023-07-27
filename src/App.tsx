import { useNavigate, useRoutes } from 'react-router-dom';
import router from '@/router'
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
const token = localStorage.getItem('pc-key') || 123

const ToPage1 = ()=>{
  const navigateTo = useNavigate()
  useEffect(()=>{
    navigateTo("/page1")
  },[])
  return <div>{useRoutes(router)}</div>
}
const ToLogin = ()=>{
  const navigateTo = useNavigate()
  useEffect(()=>{
    navigateTo("/login")
  },[])
  return <div>{useRoutes(router)}</div>
}

function BeforeRouterEnter(){
  const outlet = useRoutes(router)
  if(location.pathname === '/login' && token){
    return (<ToPage1/>)
  }
  if(location.pathname === '/login' && !token){
    return <ToLogin/>
  }
  if(location.pathname !== '/login' && !token){
    return <ToLogin/>
  }
  return outlet
}

const App = () =>{
  return(
      <BeforeRouterEnter/>
      /* useRoutes(router) */
  )
}
export default observer(App)