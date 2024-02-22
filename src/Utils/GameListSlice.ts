import { createSlice } from "@reduxjs/toolkit";

const gameListSlice = createSlice({
    name: 'gameList',
    initialState:null,
    reducers:{
        addGameList:(state, action)=>{
            return action.payload;
        },
    }
});

export const {addGameList} = gameListSlice.actions ;

export default gameListSlice.reducer ;
