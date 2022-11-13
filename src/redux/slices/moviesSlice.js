import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_KEY = '3e9b52dbfb07553d4df2f99c97de61e7';

export const moviesRequest = createAsyncThunk('movies/moviesRequestStatus', async () => {
    const getTrending = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
    const getPopular = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

    return (
        {
            trending: getTrending.data.results.slice(0, 7),
            popular: getPopular.data.results
        }
    )
});

const initialState = {
    status: '',
    trendingState: [],
    popularState: []
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(moviesRequest.pending, state => {
                state.status = 'pending';
                state.trendingState = [];
                state.popularState = [];
            })
            .addCase(moviesRequest.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.trendingState = action.payload.trending;
                state.popularState = action.payload.popular;
            })
            .addCase(moviesRequest.rejected, state => {
                state.status = 'rejected';
                state.trendingState = [];
                state.popularState = [];
            })
    }
});

// export const {  } = moviesSlice.actions;

export default moviesSlice.reducer;