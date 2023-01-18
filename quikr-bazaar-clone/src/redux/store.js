import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { productReducer } from "./products/products.reducer";
import { themeReducer } from "./theme/theme.reducer";

const rootReducer = combineReducers({
  Auth: authReducer,
  Products: productReducer,
  Theme: themeReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
