import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import tvshowsSlice from "./slices/tvshowsSlice";
import wishlistSlice from "./slices/wishlistSlice";
import userslice from "./slices/userslice";

export default configureStore({
    reducer:{
       primemovies: moviesSlice,
       primetvshows:tvshowsSlice,
       primeWishlist:wishlistSlice,
       User:userslice,

    }
})