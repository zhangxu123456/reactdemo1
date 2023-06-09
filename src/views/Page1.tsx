import { useSelector,useDispatch } from "react-redux"
import store from "@/store"
import numStatus from "@/store/NumStatus"
import Comp2 from "@/components/Comp2"

const Page1 = () => {
    // 通过useSelector 获取仓库数据
    const { num,sarr } = useSelector((state:RootState) => {
        return {num: state.NumStatus.num,sarr:state.ArrStatus.sarr}
    })
    const dispatch = useDispatch()
    const changeNum = () =>{
        /* dispatch<any>((dispatch:Function)=>{
            setTimeout(()=>{
                dispatch({type:"add1",val:10})
            },1000)
        }) */
        dispatch<any>(numStatus.asyncActions.asyncAdd1)
        //dispatch({type: "add1",val:10})
       /*  dispatch({type: "sarrpush",val:10}) */
    }
    return (
        <div>
            <Comp2>
                <p slot='footer'>123</p>
                <p slot='header'>321</p>
            </Comp2>
            <button onClick={changeNum}>按钮</button>
            Page1{num}
            <p>{sarr}</p>
        </div>
    )
}

export default Page1