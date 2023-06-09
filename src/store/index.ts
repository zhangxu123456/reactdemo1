import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import NumStatus from "./NumStatus/reducer";
import ArrStatus from "./ArrStatus/reducer";

const reducers = combineReducers({
    NumStatus,
    ArrStatus
})

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :compose

const stroe = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))

export default stroe;