import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
//import { reducers } from './rootReducer';
import thunk from 'redux-thunk'
import { loginReducer } from './reducers/loginReducer';
import { rootReducer } from './rootReducer';
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))