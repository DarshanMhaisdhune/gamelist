import { createSlice } from "@reduxjs/toolkit";


const SelectedGameId = createSlice({
    name:'GameId',
    initialState: null ,
    reducers:{
        addGameId:(state, action)=>{
            return action.payload ;
        },
    }
});

export const { addGameId } = SelectedGameId.actions ;

export default SelectedGameId.reducer ;