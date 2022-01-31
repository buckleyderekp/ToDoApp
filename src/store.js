import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer  from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

// initialize the redux store for other components to import and use
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;