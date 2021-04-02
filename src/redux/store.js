import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import domain from "./domain";
import products from "./products";
import validations from "./validations";
import loaders from "./loaders";

export const reducers = combineReducers({
  domain,
  products,
  validations,
  loaders
});

export default createStore(
  reducers,
  window?.__INITIAL_STATE__,
  applyMiddleware(reduxThunk)
);
