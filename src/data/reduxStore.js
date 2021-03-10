import { combineReducers, createStore } from "redux";
import reducerMessagePage from "./reducerMessagePage";
import reducerPostPage from "./reducerPostPage";
import reducerUserPage from "./reducerUserPage";


let reduces = combineReducers(
    {
        profilePage: reducerPostPage,
        messagesPage: reducerMessagePage,
        userPage: reducerUserPage
    }
);
let store = createStore(reduces);

window.store = store;

export default store;