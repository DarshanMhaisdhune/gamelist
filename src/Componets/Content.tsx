import React from 'react'
import Banner from './Banner';
import GameCardContainer from './GameCardContainer';

const Content: React.FC = () => {
  return (
    <div className='w-full h-auto mt-14 md:mt-20  bg-orange dark:bg-gray-900'>
      <Banner/>
      <GameCardContainer/>
    </div>
  )
}

export default Content;