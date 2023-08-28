import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../utils/api";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        value: {
            wishlistAdd: [],
            wishlistGet: []
        }
    },
    reducers: {},

    extraReducers: builder => {

        builder.addCase(addwish.fulfilled, (state, action) => {
            state.value.wishlistAdd = action.payload;
            state.error = null;
        })

        builder.addCase(addwish.rejected, (state, action) => {
            state.value.wishlistAdd = null;
            state.error = action.error;
        })


        builder.addCase(getwish.fulfilled, (state, action) => {
            state.value.wishlistGet = action.payload;
            state.error = null;
        })

        builder.addCase(getwish.rejected, (state, action) => {
            state.value.wishlistGet = null;
            state.error = action.error;
        })
    }
})


export const addwish = createAsyncThunk("/wish1", async ({ id, type }) => {

    const userId = localStorage.getItem("userId");
    const { data } = await axios.post(baseurl + "/wishList/add", {
        id, type, userId
    })


    return data;
})


export const getwish = createAsyncThunk("/wish2", async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const { data } = await axios.get(baseurl + "/wishList/userwish?userId="+userId)
    const moviesArr = await Promise.allSettled(data.map(e => axios.get(baseurl +"/movies/"+ e.id)));

    return data.map((e,i) => ({
        ...e,
        movieDetails: moviesArr[i].value.data
    }) );
})


export default wishlistSlice.reducer;