import { combineReducers, legacy_createStore } from "redux";
import cartReducer from "./redux/reducer/cartReducer";
import studentReducer from "./redux/reducer/studentReducer";

const reducer=combineReducers({
    cart:cartReducer,
    student:studentReducer
})

const store=legacy_createStore(reducer)

export default store