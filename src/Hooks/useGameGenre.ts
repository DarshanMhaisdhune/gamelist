import { API_KEY } from '../Utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Utils/Store';
import { addGenre } from '../Utils/GenreSlice';
import { useEffect } from 'react';

const useGameGenre = () => {

    const gameGenre = useSelector((store:RootState)=>store.genre);
    const dispatch:AppDispatch = useDispatch();
    const getGameGenre= async()=>{
      try{
        const data = await fetch('https://api.rawg.io/api/genres?key='+ API_KEY);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addGenre(json.results));
      }catch (error) {
        console.error('Error fetching game genres:', error);
    }
    };

    useEffect(()=>{
      // !gameGenre &&  getGameGenre();
      if (!gameGenre) {
        getGameGenre();
      }      
    },[gameGenre])
 
    return { gameGenre, getGameGenre };
};

export default useGameGenre ;