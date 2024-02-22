import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Intro from './components/intro'
import Project from './components/projects'
import ContactForm from './components/ContactForm'
import AboutMe from './components/AboutMe'
import "./App.css"
const App = () => {


  return (
    <>
      <Header />
      <Intro />
      <AboutMe/>
      <div className='ProjectsModule'>
        <h3>My Projects</h3>
        <div className='ProjectsContainer'>
        <Project />
        <Project />
        </div>
      </div>
      <ContactForm/>
      
      <Footer />
    </>
  )
}

export default App

