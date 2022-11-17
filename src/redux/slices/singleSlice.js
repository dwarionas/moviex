import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_KEY = '3e9b52dbfb07553d4df2f99c97de61e7';

export const requestSingleItem = createAsyncThunk('singleItem/statuRequestSingleItem', async (props) => {
    const { id, genre } = props;
    const getSearchResult = await axios.get(`https://api.themoviedb.org/3/${genre}/${id}?api_key=${API_KEY}`);
    return getSearchResult.data;
});

const initialState = {
    singleItemState: []
};

const singleSlice = createSlice({
    name: 'single',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(requestSingleItem.pending, state => {
                state.singleItemState = [];
            })
            .addCase(requestSingleItem.fulfilled, (state, action) => {
                state.singleItemState.push(action.payload)
            })
            .addCase(requestSingleItem.rejected, state => {
                state.singleItemState = [];
            })
    }
});

export const {  } = singleSlice.actions;

export default singleSlice.reducer;