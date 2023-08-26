import React from 'react'
import { GlobalState } from '../../context/AppContextProvider'

export const Header = () => {
  const { toggleFilter, toggleSearch, toggleGuest } = GlobalState();

  return (
    <header className='container px-3 py-4 mx-auto'>
      <div className='flex justify-between flex-wrap max-sm:gap-3 items-center'>
        <img src="/logo.svg" alt="" />
        <div className='flex border shadow-sm rounded-2xl px-3  text-xs font-Mulish cursor-pointer'  >
          <p className='border-r px-2 py-2'
            onClick={()=>{
              toggleFilter();
              toggleSearch()
            }}
          >Select City</p>
          <p className='border-r px-2 py-2' onClick={() => {
            toggleFilter()
            toggleGuest()
          }
          }>Add guests</p>
          <div className='px-2 py-2 text-red-500' onClick={() => {
            toggleFilter()
            toggleSearch()
          }}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </header>
  )
}
