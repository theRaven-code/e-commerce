import { applyMiddleware, compose, createStore } from "redux";
import loggerMiddleware from "../logger";
import monitorReducerEnhancer from "../monitorReducer";
import rootReducer from "../Reducer/rootReducer";

const middlewareEnhancer = applyMiddleware(loggerMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
