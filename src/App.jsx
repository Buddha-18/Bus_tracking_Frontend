import React, { useState } from "react"
import Navbar from "./Landing_page_components/Navbar"
import Hero from "./Landing_page_components/Hero"
import RouteSearch from "./Landing_page_components/RouteSearch"
import About from "./Landing_page_components/About"
import Footer from "./Landing_page_components/Footer"
import PassengerDashboard from "./Landing_page_components/PassengerDashboard"

function App() { 
  return (
   <>
   <Navbar/>
   <Hero/>
   <RouteSearch/>
   <About/>
   <Footer/>
   <PassengerDashboard />
   </>
  )
}

export default App


