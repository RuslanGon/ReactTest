import { configureStore } from '@reduxjs/toolkit';
import { mailboxReducer } from './mailbox/mailboxReduser';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { productDetailsReducer } from './productDetails/productDetailsSlice';

const mailboxPersistConfig = {
  key: 'mailbox',
  storage,
  whitelist: ['users'], 
};

const persistedMailboxReducer = persistReducer(mailboxPersistConfig, mailboxReducer);

export const store = configureStore({
  reducer: {
    mailbox: persistedMailboxReducer,
    productDetails: productDetailsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
