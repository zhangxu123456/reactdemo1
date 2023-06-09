const store = {
    state: {
        num: 20
    },
    actions: { // 只放同步的方法
        add1(newState: { num: number }, action: { type: string, val: number }) {
            newState.num += action.val
        }
    },
    asyncActions:{
        asyncAdd1(dispatch:Function,obj:{}){
            setTimeout(()=>{
                dispatch(obj)
            },1000)
        }
    },
    // 名字统一管理
    actionNames: {}
}

let actionNames = {}
for(let key in store.actions){
    actionNames[key] = key
}
store.actionNames = actionNames;
export default store