import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../utils/api";

const tvshowsSlice= createSlice({
    name:"tvshows",
    initialState:{
        value:{
            tvshows:[]
        }
    },
    reducers:{},

    extraReducers:builder=>{

builder.addCase(tvshows.fulfilled,(state,action)=>{
    state.value.tvshows=action.payload;
    state.error=null;
})

builder.addCase(tvshows.rejected,(state,action)=>{
    state.value.tvshows=null;
    state.error=action.error;
})
    }
})


export const tvshows = createAsyncThunk("/tvshows", async () => {

    const {data} = await axios.get(baseurl +"/tvshows/all")
return data;
})


export default tvshowsSlice.reducer;