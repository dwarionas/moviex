import { configureStore } from '@reduxjs/toolkit';

import movies from './slices/moviesSlice';
import personal from './slices/personalSlice';
import series from './slices/seriesSlice';
import search from './slices/searchSlice';
import single from './slices/singleSlice';

export default configureStore({
    reducer: {
        movies,
        personal,
        series,
        search,
        single
    },
    devTools: process.env.NODE_ENV !== 'production'
});