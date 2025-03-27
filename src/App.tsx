import Home from '@/views/Home/index'
import Login from '@/views/Login/index'
import './App.css'
function App() {
  const arr = [{label:'a',value:1},{label:'b',value:2}]
  const labelMap = new Map(arr?.map(item => [item.label,item]))
  const labelValue = new Map(arr?.map(item => [item.value,item]))
  const zx = {a:1,b:2,c:3}
  console.log(Object.entries(zx));
  
  
  return (
    <div><Login/></div>
  )
}

export default App
