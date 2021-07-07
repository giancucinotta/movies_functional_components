import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'; //

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
));

export default store;