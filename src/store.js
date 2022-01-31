import Redux, { createStore } from "redux";
import rootReducer  from "./reducers";
import { composeWithDevtools } from 'redux-devtools-extension';

// initialize the redux store for other components to import and use
const store = createStore(rootReducer, composeWithDevtools());

export default store;