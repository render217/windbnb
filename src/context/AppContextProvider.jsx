import React, { createContext, useContext, useReducer } from 'react'
import appReducer from '../reducer/AppReducer.js'
import { data } from '../data/data';




const initialState = {
    apartments:data,
    filteredApartments:data,
    city:'',
    noOfAdults:0,
    noOfChildren:0,
    showFilter:false,
    showGuest:false,
    showSearch:false,
}
export const AppContext = createContext(initialState);
const AppContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(appReducer,initialState);

    const toggleFilter = () =>{
        dispatch({
            type:"TOGGLE_FILTER",
        })
    }
    const toggleSearch = ()=>{
        dispatch({
            type:"TOGGLE_SEARCH"
        })
    }
    const toggleGuest = ()=>{
        dispatch({
            type:"TOGGLE_GUEST"
        })
    }
    const setFilter = (option)=>{
        const {city, noOfAdults, noOfChildren} =option
        const noOfGuests = noOfAdults + noOfChildren;
        const filteredApartment = filterByCity(filterByGuestNo({apartments:data,noOfGuests}),city);
        dispatch({
            type:"SET_FILTER",
            payload:{apartments:filteredApartment,noOfAdults,noOfChildren,city}
        })
    }
    const filterByGuestNo = ({apartments,noOfGuests}) =>{
         return apartments.filter(apartment => apartment.maxGuests > noOfGuests)
    }
    const filterByCity = (apartments,city)=>{
        
        return apartments.filter(apartment => city ?  apartment.city.toLowerCase() === city.toLowerCase() : true)
    }

    const value = {
        dispatch,
        toggleFilter,
        toggleGuest,
        toggleSearch,
        setFilter,
        filteredApartments:state.filteredApartments,
        apartments:state.apartments,
        noOfAdults:state.noOfAdults,
        noOfChildren:state.noOfChildren,
        showFilter:state.showFilter,
        showGuest:state.showGuest,
        showSearch:state.showSearch
    }
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
export const GlobalState = ()=>{
    const context = useContext(AppContext);
    return context;
}