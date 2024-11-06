import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { cardsReducers } from "./features/cardSearch/reducers/cardsReducers";

const rootReducer = combineReducers({
  cards: cardsReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;

export default store;
