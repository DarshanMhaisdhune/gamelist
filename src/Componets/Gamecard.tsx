import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Utils/Store';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import { ImAndroid } from "react-icons/im";
import { TbSquareRoundedLetterN } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";

interface GameByIdType {
  id: number;
  name: string;
  background_image: string;
  metacritic: number| null ;
  rating: number | undefined | null ;
  parent_platforms: { platform: { name: string } }[];
}

const Gamecard: React.FC = () => {
  const gameById = useSelector((store: RootState) => store.genreById ?? []) as GameByIdType[];
  
  if (gameById === undefined || gameById.length === 0) return null;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      {gameById.map((item: GameByIdType) => (
        <div key={item.id} className='m-4 bg-oraneplus dark:bg-gray-950 rounded-xl'>
          <img src={item.background_image} alt={item.name} className='rounded-t-xl w-96 h-52  object-cover ' />
          <div className='flex p-2 relative'>
            <div className='flex flex-row'>
              {item.parent_platforms.map((platform, index) => (
                <span key={index} className='m-1 text-powerblue'>
                  {platform.platform.name.toLowerCase() === 'playstation' && <FaPlaystation />}
                  {platform.platform.name.toLowerCase() === 'xbox' && <FaXbox />}
                  {platform.platform.name.toLowerCase() === 'pc' && <FaWindows />}
                  {platform.platform.name.toLowerCase() === 'nintendo' && <TbSquareRoundedLetterN />}
                  {platform.platform.name.toLowerCase() === 'android' && <ImAndroid />}
                </span>                
              ))}
            </div> 
            <div className='absolute top-2 right-3'>             
                <span className='text-xl  bg-slate-100 dark:bg-gray-800 rounded-lg px-1 mt-2 font-semibold text-yellow-700'>{item.metacritic}</span>             
            </div>
            <div>          

            </div>   
          </div>
           <h4 className="text-darkblue dark:text-powerblue text-xl md:text-2xl m-2 font-serif font-semibold scroll-pl-4">{item.name}</h4>
           <span className='text-red-700 text-xl flex items-center gap-1 m-2  font-semibold'><TiStarFullOutline color='yellow'/>{item.rating}/5</span>
        </div>
      ))}
    </div>
  );
};

export default Gamecard;
