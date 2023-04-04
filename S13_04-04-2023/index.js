import { incCount, decCount } from "./Action.js";
import store from "./Store.js";
var count = 1;
console.log("Initial Store Data", store.getState());
var actionObj = incCount(1);

store.dispatch(actionObj);

console.log("Store Data", store.getState());

actionObj = incCount(1);

store.dispatch(actionObj);
console.log("Store Data - 2", store.getState());

var decAction = decCount(1);

store.dispatch(decAction);
console.log("Dec", store.getState());
