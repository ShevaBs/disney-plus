import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '../features/movieSlice';
import userSlice from '../features/userSlice';

export const store = configureStore({
  reducer: {
    moviesReducer: movieSlice,
    userReducer: userSlice
  },
});

