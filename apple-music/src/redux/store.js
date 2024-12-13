import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../redux/favoriteSlice';
import playerReducer from '../redux/playerSlice';

const store = configureStore({
  reducer: {
    favorites: favoriteReducer, 
    player: playerReducer,
  },
});

export default store;
