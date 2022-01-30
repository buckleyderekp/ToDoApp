import Redux, { createStore } from "redux";
import rootReducer  from "./reducers";

// initialize the redux store for other components to import and use
const store = createStore(rootReducer);

export default store;