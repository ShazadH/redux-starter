import store from "./store/store";
import { bugAdded, bugResolved } from "./store/actions";

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugResolved(1));

console.log(store.getState());
