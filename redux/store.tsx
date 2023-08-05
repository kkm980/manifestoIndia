import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import { userApi, userApiWithCustomBaseURL } from './services/userApi'; // Import both API instances
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer,
    [userApiWithCustomBaseURL.reducerPath]: userApiWithCustomBaseURL.reducer // Add the new API reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      userApi.middleware,
      userApiWithCustomBaseURL.middleware // Add the middleware for the new API instance
    )
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
