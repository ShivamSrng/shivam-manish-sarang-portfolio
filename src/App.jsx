import React, { useEffect, useState } from 'react'
import PreLoader from './components/PreLoader/PreLoader'
import LandingPage from './components/LandingPage/LandingPage'
import AboutPage from './components/AboutPage/AboutPage'
import ProblemsSpotlightPage from './components/ProblemsSpotlightPage/ProblemsSpotlightPage'
import ContactPage from './components/ContactPage/ContactPage'


function App() {
  useEffect( () => {
    {
      async() => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    }
  }, [])
  return (
    <>
      <div>
        <PreLoader />
        <LandingPage />
        <AboutPage />
        <ProblemsSpotlightPage />
      </div>
      <ContactPage />
    </>
  )
}

export default App