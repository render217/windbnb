import React, { useRef, useState } from "react";
import { GlobalState } from "../../context/AppContextProvider";

export const Filter = () => {
  const { toggleFilter, toggleSearch, toggleGuest, showSearch, showGuest , setFilter ,noOfAdults:no_adults,noOfChildren:no_children,} = GlobalState();
  const [selectedLocation, setSelectedLocation] = useState('Oulu')
  const [noOfAdults, setNoOfAdults] = useState(no_adults);
  const [noOfChildren, setNoOfChildren] = useState(no_children);
  const submitForm = (e) => {
    e.preventDefault();
    const payload = {
        noOfAdults,
        noOfChildren,
        city:selectedLocation,
    }
    setFilter(payload)
    toggleFilter()
  };
  let guestContent = 'Add Guest'
  if (noOfAdults > 0 && noOfChildren > 0) {
    guestContent = `${noOfAdults} adult${noOfAdults > 1 ? 's' : ''}, ${noOfChildren} ${noOfChildren > 1 ? 'children' : 'child'}`
  }
  if (noOfAdults > 0 && noOfChildren === 0) {
    guestContent = `${noOfAdults} adult${noOfAdults > 1 ? 's' : ''}`
  }
  if (noOfAdults === 0 && noOfChildren > 0) {
    guestContent = `${noOfChildren} ${noOfChildren > 1 ? 'children' : 'child'}`
  }
  return (
    <div>
      <div className="bg-white text-black fixed top-0 left-0 right-0 min-h-80 pb-5 z-20 ">
        <form className="pt-10" onSubmit={submitForm}>
          <div className="container mx-auto px-10 shadow-sm rounded-md py-2 flex flex-col max-sm:items-start gap-4 sm:flex-row items-center font-Mulish">
            <div className={`w-full  border-2 ${showSearch && 'border-gray-600'} rounded-xl px-2 py-1  cursor-pointer`} onClick={toggleSearch}>
              <p className=" text-xs px-2">Location</p>
              <p
                className="px-2 py-1 min-h-[25px] w-full border-0 outline-0 text-sm"
              >{selectedLocation + ', Finland'}</p>
            </div>
            <div className={` w-full  border-2 ${showGuest && 'border-gray-600'} rounded-xl px-2 py-1 cursor-pointer`} onClick={toggleGuest}>
              <p className="text-xs px-2">Guests</p>
              <p
                className=" px-2 py-1 min-h-[25px] w-full border-0 outline-0 text-sm text-gray-400 cursor-pointer"
              >{guestContent}</p>
            </div>
            <button className="hidden sm:block text-xs px-2 py-2 sm:w-60  text-center rounded-lg bg-red-500 sm:py-3 sm:px-3 text-white space-x-2 cursor-pointer">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>Search</span>
            </button>
          </div>
          <div className="container mx-auto px-10">
            <div className="shadow-sm rounded-md py-1 flex flex-col max-sm:items-start gap-4 sm:flex-row items-start font-Mulish">
              <div className="w-full  ">
                {showSearch && (
                  <ul className="mt-4 font-Mulish text-sm ps-4 text-gray-700 ">
                    <li className="flex items-center gap-2  mb-5 cursor-pointer " onClick={() => setSelectedLocation('Helsinki')}>
                      <i className="fa-solid fa-location-dot"></i>
                      <p>Helsinki, Finland</p>
                    </li>
                    <li className="flex items-center gap-2  mb-5 cursor-pointer" onClick={() => setSelectedLocation('Turku')}>
                      <i className="fa-solid fa-location-dot"></i>
                      <p>Turku, Finland</p>
                    </li>
                    <li className="flex items-center gap-2  mb-5 cursor-pointer" onClick={() => setSelectedLocation('Oulu')}>
                      <i className="fa-solid fa-location-dot"></i>
                      <p>Oulu, Finland</p>
                    </li>
                    <li className="flex items-center gap-2  mb-5 cursor-pointer" onClick={() => setSelectedLocation('Vaasa')}>
                      <i className="fa-solid fa-location-dot"></i>
                      <p>Vaasa, Finland</p>
                    </li>
                  </ul>
                )}
              </div>

              <div className="w-full font-Mulish  ">
                {showGuest && (
                  <div className=" ps-4">
                    <div className="text-sm mb-3">
                      <p className="font-semibold">Adults</p>
                      <p className="text-xs font-light">Ages 13 or above</p>
                      <div className="my-2">
                        <span className="border rounded-md border-slate-800 px-1 " onClick={() => setNoOfAdults(prev => prev === 0 ? 0 : prev - 1)}>
                          <i className="fa-solid fa-minus"></i>
                        </span>
                        <span className="mx-2">{noOfAdults}</span>
                        <span className="border rounded-md border-slate-800 px-1 " onClick={() => setNoOfAdults(prev => prev + 1)}>
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="text-sm mb-3">
                      <p className="font-semibold">Children</p>
                      <p className="text-xs font-light">Ages 2 - 12</p>
                      <div className="my-2">
                        <span className="border rounded-md border-slate-800 px-1 " onClick={() => setNoOfChildren(prev => prev === 0 ? 0 : prev - 1)}>
                          <i className="fa-solid fa-minus"></i>
                        </span>
                        <span className="mx-2">{noOfChildren}</span>
                        <span className="border rounded-md border-slate-800 px-1 " onClick={() => setNoOfChildren(prev => prev + 1)}>
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-60"></div>
            </div>

            <button className="mt-5 text-xs  px-2 py-2 w-20  text-center rounded-lg bg-red-500 sm:py-3 sm:hidden sm:px-3 text-white space-x-2 cursor-pointer">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
      <div
        className="bg-gray-500/70 fixed inset-0 z-10"
        onClick={toggleFilter}
      ></div>
    </div>
  );
};
