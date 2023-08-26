import React from 'react'
import { HouseCard } from './HouseCard'

export const HouseList = ({apartments}) => {
    
    return (
        <div className='grid max-md:justify-center gap-5 md:grid-cols-2 lg:grid-cols-3'>
           {apartments.map(apartment =>(
            <HouseCard key={apartment.title} apartment={apartment}/>
           ))}
        </div>
    )
}
