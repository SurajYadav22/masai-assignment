import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
// import { reducer as AppReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";
import { reducer } from "./AppReducer/reducer";

const rootReducer = combineReducers({ eventData: reducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
