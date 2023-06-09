import handler from "./index"

let reducer = (state = {...handler.state}, action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state))
    /* switch (action.type) {
        case NumStatus.add1:
            NumStatus.actions[NumStatus.add1](newState, action)
            break;
        default:
            break;
    } */
    for(let key in handler.actionNames){
        if(action.type === handler.actionNames[key]){
            handler.actions[handler.actionNames[key]](newState,action)
        }
    }
    return newState
}

export default reducer