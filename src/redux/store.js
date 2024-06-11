
import { configureStore } from '@reduxjs/toolkit';
import { mailboxReducer } from './mailbox/mailboxReduser';


export const store = configureStore({
  reducer: {
  mailbox: mailboxReducer
  }
});


