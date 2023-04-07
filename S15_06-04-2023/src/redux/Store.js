import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import myReducer from "./reducer";
import todoReducer from "./todoReducer";
import logger from "redux-logger";

const combinedReducer = combineReducers({
  myReducer,
  todoReducer,
});
//Registering reducer with the store
const myStore = createStore(combinedReducer, applyMiddleware(logger));

export default myStore;
