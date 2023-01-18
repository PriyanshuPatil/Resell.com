import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { themeReducer } from "./theme/theme.reducer";

const reducer = combineReducers({
  Theme: themeReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  reducer,
  composer(applyMiddleware(thunk))
);
