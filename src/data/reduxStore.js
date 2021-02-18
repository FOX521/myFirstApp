import { combineReducers, createStore } from "redux"
import reducerMessagePage from "./reducerMessagePage";
import reducerPostPage from "./reducerPostPage";


let reduces = combineReducers(
    {
        profilePage: reducerPostPage,
        messagesPage: reducerMessagePage,
    }
);

let store = createStore(reduces);

export default store;