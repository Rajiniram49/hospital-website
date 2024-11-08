import React from 'react'
import './Bio.css'
import bio_1 from '../../assets/hp.jpg'
import bio_2 from '../../assets/homoeo.jpeg'
import bio_3 from '../../assets/honey.jpg'
import icon_1 from '../../assets/therapy.png'
import icon_2 from '../../assets/homeopathy.png'
import icon_3 from '../../assets/h1.png'



const Bio = () => {
  return (
    <div className='Bio'>
        <div className="bios">
            <img src={bio_1} alt="" />
            <div className="caption">
                <img src={icon_1} alt="" />
                <h1>Why Choose Homoeo?</h1>
                <p>
                    <ol>
                        No Side-effects<br></br>
                        Maintains equlllibrium in the body<br></br>
                        Avoids disease from re-occuring<br></br>
                        
                    </ol>
                </p>
            </div>
       </div>
        <div className="bios">
            <img src={bio_2} alt="" />
            <div className="caption">
                <img src={icon_2} alt="" />
                <h1>Regular diagnosis</h1>
                <p>
                    <ol>
                        Consequent follow-ups for easy recovery                     
                    </ol>
                </p>
                
            </div>
       </div>
        <div className="bios">
            <img src={bio_3} alt="" />
            <div className="caption">
                <img src={icon_3} alt="" />
                <h1>Treatment</h1>
                <p>
                    <ol>
                        Continuous follow-up heals the internal body<br></br>
                        We promise to make things in your comfort                    
                    </ol>
                </p>
                
            </div>
       </div> 
        
    </div>
  )
}

export default Bio