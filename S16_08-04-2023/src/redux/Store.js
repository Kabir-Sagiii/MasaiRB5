import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import myReducer from "./reducer";
import todoReducer from "./todoReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

//create your own middleware
function myMiddleware(store) {
  return function (next) {
    return function (action) {
      // console.log("Middleware is called");
      console.log("PrevState", store.getState());
      console.log("Action", action);
      next(action);

      console.log("Next State", store.getState());
    };
  };
}

const mySecondLogger = (store) => (next) => (action) => {
  console.log("My Second Logger");
  next(action);
};

const combinedReducer = combineReducers({
  myReducer,
  todoReducer,
});
//Registering reducer with the store
const myStore = createStore(
  combinedReducer,
  // applyMiddleware(myMiddleware, mySecondLogger)
  applyMiddleware(logger, thunk)
);

export default myStore;
