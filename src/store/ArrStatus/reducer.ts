import handler from "./index"

let reducer = (state = {...handler.state}, action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state))
    /* switch (action.type) {
        case handler.sarrpush:
            handler.actions[handler.sarrpush](newState, action)
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