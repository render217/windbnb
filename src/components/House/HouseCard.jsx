import React from 'react'

export const HouseCard = ({ apartment }) => {
    const { title, city, country, superHost, rating, maxGuests, type, beds, photo } = apartment;

    return (
        <div className='font-Montserrat min-w-sm max-w-sm sm:max-w-md px-2'>
            <img className='max-h-[200px] object-cover w-full rounded-2xl' src={photo} alt="" />
            <div className='flex justify-between items-center mt-2 mb-2 text-xs'>
                {superHost && (<p className='text-sm sm:text-xs font-semibold border border-slate-950 rounded-lg px-1 py-1 '>super host</p>)}

                <div className='text-xs text-gray-400 text-light space-x-1'>
                    <span>Entire apartment </span>
                    {beds && ( <span>. {beds} {beds > 1 ? 'beds':'bed'}</span>)}
                 
                </div>
                <div className='space-x-2'>
                    <span>  <i className="text-red-500 text-sm fa-solid fa-star"></i>
                    </span>
                    <span >{rating}</span>
                </div>
            </div>
            <h3 className='font-semibold text-sm'>{title}</h3>
        </div>
    )
}
