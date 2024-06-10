import { combineReducers, createStore } from "redux";
import { mailboxReduser } from "./mailbox/mailboxReduser";

const rootReducer = combineReducers({
    mailbox: mailboxReduser
})

export const store = createStore(rootReducer)