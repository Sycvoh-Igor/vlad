import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import posts from "../features/Posts/reducer";
import usersReducer from "../redux/users-reducer";
import userReducer from "../redux/user-reducer";

const reducers = combineReducers({
    posts: posts,
    users: usersReducer,
    user: userReducer
});

export type RootState = ReturnType<typeof reducers>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;