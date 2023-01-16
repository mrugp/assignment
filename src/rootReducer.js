import { combineReducers } from "redux";

import { loginReducer } from "./reducers/loginReducer";
import { registerReducer } from "./reducers/registerReducer";
export const rootReducer = combineReducers({loginReducer,
    registerReducer
})