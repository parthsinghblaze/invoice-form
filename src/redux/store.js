import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { reducer } from "./invoceReducer/reducer";

export const store = createStore(reducer, applyMiddleware(logger));
