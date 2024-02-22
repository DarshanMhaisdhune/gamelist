import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
    name: 'genre',
    initialState:null,
    reducers:{
        addGenre:(state, action)=>{
            return action.payload;
        },
    }
});

export const { addGenre} = genreSlice.actions ;

export default genreSlice.reducer ;