import React from 'react'
import { HouseList } from './HouseList'
import { GlobalState } from '../../context/AppContextProvider'

export const House = () => {
  const {apartments}= GlobalState();
  return (
    <div className='container mx-auto px-3 py-4'>
        <div className='font-Montserrat flex items-center justify-between mb-8'>
            <h3 className='text-xl font-semibold'>Stays in Finland</h3>
            <p className='text-sm'>{apartments.length}+ stays</p>
        </div>
        <HouseList apartments={apartments}/>
    </div>
  )
}
