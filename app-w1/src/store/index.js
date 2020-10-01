import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import favoriteReducer from "../store/reducers/favoriteReducer.js";
import animeReducer from "../store/reducers/animeReducer.js";

const reducers = combineReducers({
  favoriteReducer,
  animeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(thunk);
const enhancer = composeEnhancers(middlewares);

const store = createStore(reducers, enhancer);

export default store;