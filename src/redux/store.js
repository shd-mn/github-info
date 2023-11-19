import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { githubApi } from '@/redux/services/githubApi';
import usersReducer from '@/redux/features/usersSlice';

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);
