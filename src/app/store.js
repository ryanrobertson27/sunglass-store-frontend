import { configureStore } from '@reduxjs/toolkit';
import { sunglassesApi } from '../services/sunglasses';

export const store = configureStore({
  reducer: {
    [sunglassesApi.reducerPath]: sunglassesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sunglassesApi.middleware),
});
