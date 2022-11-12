import { configureStore } from '@reduxjs/toolkit';

import movies from './slices/moviesSlice';

export default configureStore({
    reducer: {
        movies
    },
    devTools: process.env.NODE_ENV !== 'production'
});