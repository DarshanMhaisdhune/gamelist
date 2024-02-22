import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../Utils/Store';


interface gameListType{
  id: number;
  name: string;
  background_image: string;
}
const Banner: React.FC = () => {

    const gameList = useSelector((store:RootState)=> store.gameList ?? [])as gameListType[];   
    const game1 = gameList[0];
    if(gameList && game1 === undefined)return null;
  return (
    <div >        
            <div className='w-full p-5 relative lg:h-[30rem] '>
            <img src={game1.background_image} alt={game1.name} className='rounded-xl w-full h-full object-cover ' /> 
            <div className="absolute m-5 rounded-xl inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute sm:left-24 bottom-4 p-4">
            <p className="text-white text-xl md:text-2xl font-bold">{game1.name}</p>
            </div>
            </div>
    </div>
  )
}

export default Banner ;