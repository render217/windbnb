import React from 'react'
import { Filter, Header, House } from './components'
import { GlobalState } from './context/AppContextProvider';


const App = () => {
  const {showFilter} = GlobalState();
  return (
    <div className=''>
      {showFilter ? <Filter/> : null}
      <Header />
      <House/>
    </div>
  )
}

export default App