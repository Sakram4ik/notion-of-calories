import {configureStore} from '@reduxjs/toolkit';
import {ServerFetch} from './server/server.fetch';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [ServerFetch.reducerPath]: ServerFetch.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ServerFetch.middleware),
});
setupListeners(store.dispatch);
