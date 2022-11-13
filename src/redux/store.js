import { configureStore } from '@reduxjs/toolkit';

import movies from './slices/moviesSlice';
import personal from './slices/personalSlice';

export default configureStore({
    reducer: {
        movies,
        personal
    },
    devTools: process.env.NODE_ENV !== 'production'
});