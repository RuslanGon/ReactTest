
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mailboxReduser from './mailbox/mailboxReduser';


const rootReducer = combineReducers({
  mailbox: mailboxReduser
});

export const store = configureStore({
  reducer: rootReducer
});
