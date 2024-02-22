import { API_KEY } from '../Utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Utils/Store';
import { useEffect } from 'react';
import { useSidebar } from '../Context/SideContext';
import { addGenreById } from '../Utils/GenreIdListSlice';

const useGenreList = () => {

    const { genreId } =useSidebar();
    const genreIdList = useSelector((store:RootState)=>store.genreById);
    const dispatch:AppDispatch = useDispatch();
    const geGenreIdList= async()=>{
      try{
        const data = await fetch('https://api.rawg.io/api/games?key='+ API_KEY +'&genres='+genreId);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addGenreById(json.results));
      }catch (error) {
        console.error('Error fetching game genres:', error);
    }
    };

    useEffect(()=>{          
        geGenreIdList();           
    },[genreId])
 
    return { genreIdList, geGenreIdList };
};

export default useGenreList ;