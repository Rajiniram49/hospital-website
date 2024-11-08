import React, { useState } from 'react'
import Navbar from './Components2/NavBar/Navbar'
import Hero from './Components2/Hero1/Hero'
import Bio from './Components2/Bio/Bio'
import Title from './Components2/Title/Title'
import About from './Components2/About1/About'
import Office from './Components2/Office1/Office'
import Testimonials from './Components2/Testimonials1/Testimonials'
import Contact from './Components2/Contact1/Contact'
import Footer from './Components2/Footer1/Footer'
import VideoPlayer from './Components2/VideoPlayer/VideoPlayer'



const App2 = () => {


  const[playState,setPlayState]=useState(false);




  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR TREATMENT' title='Fell free to ask quries any time'/>
        <Bio/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Leave a Glance'/>
        <Office/>
        <Title subTitle='Testimonials' title='What Our Patients Say'/>
        <Testimonials/>
        <Title subTitle='Contact Us ' title='Get In Touch'/>
        <Contact/>
        <Footer/>
        
      </div>
      <VideoPlayer playState={playState}  setPlayState={setPlayState} onClose={()=>setPlayState(false)}/>
    </div>
  )
}

export default App2