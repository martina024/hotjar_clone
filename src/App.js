import React from 'react'
import Dashboard from './Components/DashBoard'

import Footer from './Components/Footer'
import Navbar from "./Components/Navbar"
import AllRoutes from './Pages/AllRoutes'
import Signup from './Pages/Signup'




const App = () => {
  return (
    <div>
      
      <Navbar/>
     
      <Dashboard/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App

