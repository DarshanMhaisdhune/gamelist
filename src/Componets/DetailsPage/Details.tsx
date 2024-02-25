import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../Utils/Store';
import { TiArrowBack } from "react-icons/ti";
import useGenreList from '../../Hooks/useGenreIdList';
import DarkMode from '../DarkMode';
import { API_KEY } from '../../Utils/Constants';

interface PlatformType {
    platform: { id: number, name: string };
}

interface RatingType {
    id: number;
    title: string;
    count: number;
    percent: number;
}


interface GenreType {
    id: number;
    name: string;
}
  
  interface GameDetType {
    id: number;
    name: string;
    ratings: RatingType[];
    platforms: PlatformType[];
    metacritic: number;
    released: string; 
    details: {
        genres: GenreType[];
    };
  }

 

const Details: React.FC = () => {

    useGenreList();
    const GameDetails: (GameDetType | undefined)[] = useSelector((store:RootState)=> store.genreById ?? []);
    const GameId = useSelector((store:RootState)=>store.gameId);
    const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

    useEffect(() => {
        const TrailerVideo = async () => {
            try {                
                const response = await fetch(`https://api.rawg.io/api/games/${GameId}/movies?key=${API_KEY}`);
                const data = await response.json(); // Parse JSON response
                const trailerUrl = data.results.length > 0 ? data.results[0].data['480'] : null;
                // console.log(trailerUrl);
                setTrailerUrl(trailerUrl);
            }catch (error) {
                console.error('Error Fetching TrailerVideo',error);
            }
        };
        TrailerVideo();
    }, []);

    function goToHomePage() {
        window.location = "/"  as unknown as Location;
      };
    


    if(GameDetails === undefined ) return null ;

    const FilterGameDetils: GameDetType[] = GameDetails.filter((game): game is GameDetType => game !== undefined && game.id === GameId );
    // console.log(FilterGameDetils);
    const filteredGame = FilterGameDetils[0];
    if (!filteredGame) return null; 

  


  
  return (
    <div className='bg-orange dark:bg-gray-700 w-full'>
        <span onClick={goToHomePage} className='fixed top-2 left-2 font-bold text-2xl z-20 px-2 hover:bg-slate-300 mx-1 '><TiArrowBack /></span>
        <span className='absolute top-2 right-2 text-2xl p-2'><DarkMode/></span>
        <div className='items-center text-center pt-10'>
            <h1 className='font-semibold lg:font-bold text-2xl lg:text-5xl text-left pl-28 font-sans text-gray-700 dark:text-powerblue py-4'>{filteredGame.name}</h1>
            <div className='flex bg-oraneplus dark:bg-gray-600 rounded-xl w-[24rem] md:w-[30rem] h-40 gap-2 p-2 mx-auto lg:mx-36 my-4 items-center'>
            <p className='lg:text-xl text-violate dark:text-gray-800 font-semibold  '>Ratings:</p>
                    <ul className=' gap-2 font-medium text-white px-2 py-4'>
                        {filteredGame.ratings.map(rating => (
                            <li className='flex px-3 py-1 items-center' key={rating.id}><span className='text-base md:text-lg lg:text-xl pr-1 text-black dark:text-yellow-400'>{rating.title}:</span> {rating.percent}% ({rating.count} votes)</li>
                        ))}
                    </ul>         
            </div>
            <div className='flex w-4/5 justify-center mx-auto my-4 rounded-2xl'>
            {trailerUrl ? (
                <iframe
                    className='video-iframe  w-96 lg:w-full  h-52 lg:h-[30rem] rounded-2xl p-2'
                    title='Game Trailer'
                    src={trailerUrl}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                />
            ) : (
                <p>No trailer available</p>
            )}
            </div>
            <div className='bg-oraneplus dark:bg-gray-600 w-4/5 rounded-xl mx-auto my-2 '>
            <h1 className=' text-violate font-semibold lg:font-bold text-lg lg:text-2xl px-4 py-2 text-left'>About</h1>
            <p className='px-6 pb-2  font-medium  lg:text-lg  text-white text-left '>Embark on an immersive journey into a vibrant virtual world where every corner holds new adventures. With stunning graphics and captivating gameplay, this game transports players into an epic tale filled with challenges, mysteries, and triumphs. Explore vast landscapes, battle formidable foes, and uncover ancient secrets as you write your own legend in this unforgettable gaming experience.</p>  
            </div>

            <div className=' flex flex-wrap bg-oraneplus dark:bg-gray-600 mx-auto w-4/5 h-auto rounded-xl my-2 '>
                <div className='flex flex-wrap'></div>
                <div className='m-2'>
                <p className='text-xl lg:text-2xl mx-2 my-1 font-medium text-white dark:text-gray-800'>Platforms</p>
                    <ul>
                        {filteredGame.platforms.map(platform => (
                            <li className='text-gray-500 dark:text-powerblue py-1 px-2' key={platform.platform.id}>{platform.platform.name}</li>
                        ))}
                    </ul>
                </div>
                <div className='m-2'>
                    <p className='text-xl lg:text-2xl gap-2 font-medium text-white dark:text-gray-800'>MetaScore:<span className='text-red-500 bg-gray-400 px-2 my-1 border-2 border-black rounded-lg'>{filteredGame.metacritic}</span></p>
                </div>
                {filteredGame && filteredGame.details && filteredGame.details.genres && (
                        <div className='m-2'>
                        <p>Genres:</p>
                                <ul>
                                    {filteredGame.details.genres.map(genre => (
                                        <li key={genre.id}>{genre.name}</li>
                                    ))}
                                </ul>
                              
                        </div>
                )}
                
                <div className='m-2 text-xl lg:text-2xl font-medium text-white dark:text-gray-800 '>Release Date: <span className='text-gray-500 dark:text-powerblue py-1 px-2 text-xl'>{filteredGame.released}</span></div>                
                <div className='m-2 text-xl lg:text-2xl font-medium text-white dark:text-gray-800'>Age rating:<span className='text-gray-500 dark:text-powerblue py-1 px-2 text-xl'> 17+</span></div>

            </div>
            
            <div className='bg-orange dark:bg-gray-600 mx-auto w-4/5 h-auto rounded-xl my-2'>
                <h1 className='text-left text-white font-mono px-4 py-2'>Website</h1>
            </div>
          
                      
        </div>
    </div>
  )
}

export default Details ;