import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../utils/api";

const userSlice = createSlice({
    name: "User",
    initialState: {
        value: {
            register: {},
            login:{},
            GenerateToken:{},
            changepass:{},
            verifyToken: {},
            loggedInuser:{},
            // userDetails:{}
        }
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state,action) => {
            state.value.register = action.payload;
            state.error = null;
        })
        builder.addCase(register.rejected,(state,action) => {
            state.value.register = null;
            state.error = action.error;
        })


        builder.addCase(GenerateToken.fulfilled, (state,action) => {
            state.value.GenerateToken = action.payload;
            state.error = null;
        })
        builder.addCase(GenerateToken.rejected,(state,action) => {
            state.value.GenerateToken = null;
            state.error = action.error;
        })


        builder.addCase(verifyToken.fulfilled, (state,action) => {
            state.value.verifyToken = action.payload;
            state.error = null;
        })
        builder.addCase(verifyToken.rejected,(state,action) => {
            state.value.verifyToken = null;
            state.error = action.error;
        })


        builder.addCase(changePassword.fulfilled, (state,action) => {
            state.value.changepass = action.payload;
            state.error = null;
        })
        builder.addCase(changePassword.rejected,(state,action) => {
            state.value.changepass = null;
            state.error = action.error;
        })

        builder.addCase(loggedInuser.fulfilled, (state,action) => {
            state.value.loggedInuser = action.payload;
            state.error = null;
        });


        builder.addCase(loggedInuser.rejected,(state,action) => {
            state.value.loggedInuser = null;
            state.error = action.error;
        })


        builder.addCase(login.fulfilled, (state,action) => {
            state.value.login = action.payload;
            localStorage.clear();
            const keys = Object.keys(action.payload.data);
            for (const key of keys){
                localStorage.setItem(key,action.payload.data[key])
            }

            if(action.payload.data.token){
                action.payload.navigate("/primepage")

            }
            action.payload.navigate("/primepage")
            state.error = null;
        })
        builder.addCase(login.rejected,(state,action) => {
            state.value.login = null;
            state.error = action.error;
        })
    }
})

export const register = createAsyncThunk("/register", async (userDetails) => {
    const {data} = await axios.post(baseurl + "/user/register",userDetails);


    return data;
})


export const login = createAsyncThunk("/login", async ({userDetails, navigate}) => {
    const {data} = await axios.post(baseurl + "/user/login",userDetails);


    return {data, navigate};
})


export const GenerateToken = createAsyncThunk("/passwordReset", async (userDetails) => {
    const {data} = await axios.post(baseurl + "/user/passwordReset",userDetails);


    return data;
})

export const verifyToken = createAsyncThunk("/verifyToken", async (token) => {
    const {data} = await axios.get(baseurl + "/user/verify"+token);


    return data;
})


export const changePassword = createAsyncThunk("/changePassword", async (passData) => {
    const {data} = await axios.post(baseurl + "/user/changePass", passData);
return data;
})


export const loggedInuser = createAsyncThunk("/loggedInuser", async () => {
    const token = localStorage.getItem("token");

    const {data} = await axios.get(baseurl + "/user/loggedInUser", {
headers:{
    Authorization: "Bearer " + token
}
    });
return data;
})


export default userSlice.reducer;