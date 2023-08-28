import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../utils/api";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        value:{
            movies:[],
            movieDetails:{}
        }
    },
    reducers:{},

    extraReducers:builder=>{

builder.addCase(movies.fulfilled,(state,action)=>{
    state.value.movies=action.payload;
    state.error=null;
})

builder.addCase(movies.rejected,(state,action)=>{
    state.value.movies=null;
    state.error=action.error;
})

builder.addCase(moviedetails.fulfilled,(state,action)=>{
    state.value.movieDetails=action.payload;
    state.error=null;
})

builder.addCase(moviedetails.rejected,(state,action)=>{
    state.value.movieDetails=null;
    state.error=action.error;
})
    }
})


export const movies = createAsyncThunk("/movies", async () => {

    const {data} = await axios.get(baseurl +"/movies/all")
return data;
})

export const moviedetails = createAsyncThunk("/moviedetails", async (params) => {

    const {data} = await axios.get(baseurl +"/movies/"+ params)
return data;
})


export default movieSlice.reducer;