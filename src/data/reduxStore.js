import { combineReducers, createStore } from "redux";
import authReducer from "./reducerAuth";
import reducerMessagePage from "./reducerMessagePage";
import reducerPostPage from "./reducerPostPage";
import reducerUserPage from "./reducerUserPage";


let reduces = combineReducers(
    {
        profilePage: reducerPostPage,
        messagesPage: reducerMessagePage,
        userPage: reducerUserPage,
        auth: authReducer 
    }
);
let store = createStore(reduces);

window.store = store;

export default store;