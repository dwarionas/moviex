import { configureStore } from '@reduxjs/toolkit';

import movies from './slices/moviesSlice';
import personal from './slices/personalSlice';
import series from './slices/seriesSlice';
import search from './slices/searchSlice';

export default configureStore({
    reducer: {
        movies,
        personal,
        series,
        search
    },
    devTools: process.env.NODE_ENV !== 'production'
});