import { createStore, applyMiddleware } from "redux";
import { myCreateStore } from "../library/myRedux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk'

const logger = (store) => (next) => (action) => {
  console.group(action.type);

  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};


export const store = createStore(rootReducer, applyMiddleware(logger,thunk));