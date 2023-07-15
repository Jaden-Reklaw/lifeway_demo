import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { swapiApi } from './apis/swapiApi';

export const store = configureStore({
    reducer: {
        [swapiApi.reducerPath]: swapiApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
          .concat(swapiApi.middleware);
      },
});

setupListeners(store.dispatch);

console.log(store.getState());