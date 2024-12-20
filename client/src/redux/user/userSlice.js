import { createSlice } from "@reduxjs/toolkit";
import SignIn from "../../pages/Signin";
const initialState={
currentUser:null,
error:null,
loading:false,
};
const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        singInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;

        }
    
    }
});
export const {signInStart,signInSuccess,singInFailure} = userSlice.actions;
export default userSlice.reducer;