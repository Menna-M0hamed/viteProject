import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import WhoAreWe from './components/WhoAreWe';
import Achievements from './components/Achievements';
import Magazine from './components/Magazine';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Headings from './components/Headings';
import Float from './components/Float';
import SaidAboutUs from './components/SaidAboutUs';
import Creativity from './components/Creativity';
import ScrollToHashElement from './components/ScrollToHashElement ';


function App() {
  return (
    <>
    <ScrollToHashElement/>
    <NavBar/>
    <Hero/>
    <WhoAreWe/>
    <Achievements/>
    <Magazine/>
    <Creativity/>
    <SaidAboutUs/>
    <Subscribe/>
    <Footer/>
    <Float/>
    </>
  )
}

export default App
