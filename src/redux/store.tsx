import { createStore, combineReducers, applyMiddleware, compose, Action } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import postsReducer from "./posts-reducer";
import usersReducer from "./users-reducer";



let reducers = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

type redusersType = typeof reducers;
export type AppStateType = ReturnType<redusersType>

// type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;