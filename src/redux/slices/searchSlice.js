import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_KEY = '3e9b52dbfb07553d4df2f99c97de61e7';

export const requestSearch = createAsyncThunk('search/statusRequestSearch', async (props) => {
    const { searchString, currentPage } = props;
    const getSearchResult = await axios.get(`https://api.themoviedb.org/3/search/${currentPage}?api_key=${API_KEY}&query=${searchString}`);

    return getSearchResult.data.results;
});

const initialState = {
    searchState: [],
    currentPage: 'movie',
    searchQuery: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSearchParams: (state, action) => {
            state.currentPage = action.payload.genre;
            state.searchQuery = action.payload.query;
        }
    },
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

export const { setCurrentPage, setSearchQuery, setSearchParams } = searchSlice.actions;

export default searchSlice.reducer;