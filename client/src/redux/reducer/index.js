import { combineReducers } from "redux";
import chatMassage from './chatMsg'
import { asideAction } from "./hideShow";
const rootReducer = combineReducers(
    {
        chatMassage,
        asideAction,
    }
);
export default rootReducer;