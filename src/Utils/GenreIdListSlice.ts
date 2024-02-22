import { createSlice } from "@reduxjs/toolkit";


const genrebyidSlice = createSlice({
    name:'genreid',
    initialState: null,
     reducers:{
        addGenreById:(state, action)=>{
            return action.payload;
        },
     }
});

export const { addGenreById }= genrebyidSlice.actions ;

export default genrebyidSlice.reducer ;