import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './slices/cardSlice';
import leaderboardReducer from './slices/leaderboardSlice';
import topicReducer from './slices/topicSlice';
import statNavReducer from './slices/statNavSlice';
import supportNavReducer from './slices/supportNavSlice';


export const store = configureStore({
  reducer: {
    card: cardReducer,
    leaderboard: leaderboardReducer,
    topic: topicReducer,
    statNav: statNavReducer,
    supportNav: supportNavReducer,
  },
})