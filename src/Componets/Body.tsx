import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content';
import useGameGenre from '../Hooks/useGameGenre';
import useGameList from '../Hooks/useGameList';
import useGenreList from '../Hooks/useGenreIdList';

const Body: React.FC = () => {

  
  useGameGenre();
  useGameList();
  useGenreList();
 
  return (
    <div className='flex w-full bg-orange dark:bg-gray-900'>
      <div className=' w-1/2  md:w-1/4  xl:w-1/5 flex-none z-20 fixed h-screen overflow-y-auto no-scrollbar'>
      <Sidebar/>
      </div>
      <div className='w-full md:ml-1/4 xl:ml-1/5 '>
      <Content/>
      </div>
    </div>
  )
}

export default Body