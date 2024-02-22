import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./GenreSlice";
import gameListReducer from "./GameListSlice";
import genreIdReducer from "./GenreIdListSlice";


const appStore = configureStore({
    reducer:{
        genre: genreReducer,
        gameList: gameListReducer,
        genreById: genreIdReducer,

    },
}) ;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export default appStore ;