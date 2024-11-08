import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpeg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h2>About Us</h2>
            <p>
                <h3>Dr.P.Gayathri Devi BHMS</h3>
                As an experienced Homeopathic Doctor, I am dedicated to providing holistic healing for both body and mind. My approach uses natural remedies and personalized treatment plans tailored to your unique needs. Trust in my expertise to guide you towards overall wellness through gentle, effective homeopathic solutions. Discover the power of nature's medicine and start your journey to better health today.
            </p>
        </div>
    </div>
  )
}

export default About


