import React from 'react'
import './App.css'
//import Layout from './templates/Layout'
import Mortianos from './pages/Mortianos'
import StateContext from './context/StateContext' ;

function App() {

  return (
    <StateContext.Provider value={{isLogged:true} }>
      {/* <Layout/> */}
      <Mortianos/>
    </StateContext.Provider>
  )
}

export default App
