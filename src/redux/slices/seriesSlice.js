import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_KEY = '3e9b52dbfb07553d4df2f99c97de61e7';

export const seriesRequest = createAsyncThunk('movies/moviesRequestStatus', async () => {
    const getTrending = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`);
    const getPopular = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);

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

const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(seriesRequest.pending, state => {
                state.status = 'pending';
                state.trendingState = [];
                state.popularState = [];
            })
            .addCase(seriesRequest.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.trendingState = action.payload.trending;
                state.popularState = action.payload.popular;
            })
            .addCase(seriesRequest.rejected, state => {
                state.status = 'rejected';
                state.trendingState = [];
                state.popularState = [];
            })
    }
});

// export const {  } = seriesSlice.actions;

export default seriesSlice.reducer;