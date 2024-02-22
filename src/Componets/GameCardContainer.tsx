import React from 'react'
import Gamecard from './Gamecard';
import { useSidebar } from '../Context/SideContext';

const GameCardContainer:React.FC = () => {   
  const { genreName } = useSidebar();
  return (
    <div className='p-1'>     
        <h2 className='text-xl md:text-3xl font-semibold font-mono m-2 text-darkblue dark:text-powerblue'>{genreName} Games</h2>  
        <div className='flex justify-center'>
         <Gamecard/>
        </div> 
    </div>
  )
}

export default GameCardContainer ;