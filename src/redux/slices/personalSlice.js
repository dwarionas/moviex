import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_KEY = '3e9b52dbfb07553d4df2f99c97de61e7';

export const personalRequest = createAsyncThunk('personal/personalRequestStatus', async () => {
    const getGenres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    const getToprated = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);

    return (
        {
            toprated: getToprated.data.results,
            genres: getGenres.data.genres
        }
    )
});

const initialState = {
    status: '',
    topratedState: [],
    genresState: []
};

const personalSlice = createSlice({
    name: 'personal',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(personalRequest.pending, state => {
                state.status = 'pending';
                state.topratedState = [];
                state.genresState = [];
            })
            .addCase(personalRequest.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.topratedState = action.payload.toprated;
                state.genresState = action.payload.genres;
            })
            .addCase(personalRequest.rejected, state => {
                state.status = 'rejected';
                state.topratedState = [];
                state.genresState = [];
            })
    }
});

// export const {  } = personalSlice.actions;

export default personalSlice.reducer;