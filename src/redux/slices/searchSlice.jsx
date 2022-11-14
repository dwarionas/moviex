import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_KEY = '3e9b52dbfb07553d4df2f99c97de61e7';

export const requestSearch = createAsyncThunk('search/statusRequestSearch', async (searchValue) => {
    const getSearchResult = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`);

    return getSearchResult.data.results;
});

const initialState = {
    searchState: []
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(requestSearch.pending, state => {
                state.searchState = [];
            })
            .addCase(requestSearch.fulfilled, (state, action) => {
                state.searchState = action.payload;
            })
            .addCase(requestSearch.rejected, state => {
                state.searchState = [];
            })
    }
});

export const {  } = searchSlice.actions;

export default searchSlice.reducer;