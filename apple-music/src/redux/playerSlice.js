import { createSlice } from '@reduxjs/toolkit';

// Stato iniziale
const initialState = {
  currentTrack: null, // Dati della traccia attualmente in riproduzione
  isPlaying: false,    // Stato di riproduzione
  volume: 1,           // Volume del player (0 a 1)
  repeat: false,       // Stato del repeat
};

// Creazione dello slice
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload; // Imposta la traccia corrente
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying; // Cambia stato di riproduzione
    },
    setVolume: (state, action) => {
      state.volume = action.payload; // Imposta il volume
    },
    toggleRepeat: (state) => {
      state.repeat = !state.repeat; // Cambia stato repeat
    },
  },
});

export const {
  setCurrentTrack,
  togglePlay,
  setVolume,
  toggleRepeat,
} = playerSlice.actions;

export default playerSlice.reducer;
