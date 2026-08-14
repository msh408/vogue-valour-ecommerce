import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        user :"",
        isAuthenticated:false
    }


    const authSlice = createSlice ({
        name:"login",
        initialState,

        reducers:{
            setLogin:(state,action)=>{
               state.user=action.payload,
               state.isAuthenticated=true
            },
            setLogOut:(state)=>{
                state.user = null,
                state.isAuthenticated=false
            }
        }
    })


