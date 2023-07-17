import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { swapiApi } from './apis/swapiApi';
import { charactersSlice } from './slice/charactersSlice';

export const store = configureStore({
    reducer: {
        [charactersSlice.name]: charactersSlice.reducer,
        [swapiApi.reducerPath]: swapiApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
          .concat(swapiApi.middleware);
      },
});

setupListeners(store.dispatch);