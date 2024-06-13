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
import { authReducer } from './auth/authSlice';

const mailboxPersistConfig = {
  key: 'mailbox',
  storage,
  whitelist: ['users'], 
};

const authPersistConfig = {
  key: 'auth',  
  storage,
  whitelist: ['token'], 
};

const persistedMailboxReducer = persistReducer(mailboxPersistConfig, mailboxReducer);
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer); 

export const store = configureStore({
  reducer: {
    mailbox: persistedMailboxReducer,
    productDetails: productDetailsReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
