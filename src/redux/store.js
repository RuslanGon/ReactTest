
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mailboxReducer from './mailbox/mailboxReducer';  

const rootReducer = combineReducers({
  mailbox: mailboxReducer
});

export const store = configureStore({
  reducer: rootReducer
});
