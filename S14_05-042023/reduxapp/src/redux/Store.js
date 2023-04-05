import { legacy_createStore as createStore } from "redux";
import myReducer from "./reducer";
//Registering reducer with the store
const myStore = createStore(myReducer);

myStore.subscribe(() => {
  console.log(myStore.getState());
});

export default myStore;
