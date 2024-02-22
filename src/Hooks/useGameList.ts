
import React, { useEffect } from 'react'
import { API_KEY } from '../Utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Utils/Store';
import { addGameList } from '../Utils/GameListSlice';

const useGameList = () => {
  
    const gameList = useSelector((store:RootState)=> store.gameList);
    const dispatch:AppDispatch = useDispatch();
    const getGameList = async()=>{
        try{
            const data = await fetch('https://api.rawg.io/api/games?key='+API_KEY);
            const json = await data.json();
            // console.log(json.results);
            dispatch(addGameList(json.results));

        }catch(error){
            console.error('Error fetching Game List:', error)
        }
    };

    useEffect(()=>{
        if(!gameList){
        getGameList();
        }
    },[gameList])
   
    return { gameList, getGameList};
};

export default useGameList