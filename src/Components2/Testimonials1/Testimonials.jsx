import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -80){
        tx -= 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = ()=>{
    if(tx > 0){
        tx += 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            
                            <div>
                                <h3>Thilagavathi</h3>
                                <span>Freelancer</span>
                            </div>
                        </div>
                        <p>I am from Tirunelveli and I have been suffering from Arthoritis for the past 15 years. 
                            Came to know about Shirdi Homoeopathy Clinic in Chennai, visited the clinic once and explained about the difficulties I face. 
                            The way she asked me the questions created confidence in me that I have come to the right place for treatment. 
                            Doctor gave me medicines for one month and I feel much better now.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        
                            <div>
                                <h3>Sneha G</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>Shirdi Homoeopathy Clinic is an excellent choice for anyone seeking top-quality medical care. 
                            The clinic is clean and hygienic, with sterilized equipment and quick service. 
                            The doctors and physiotherapists are highly attentive and extremely supportive, ensuring a speedy recovery. 
                            Plus, the clinic offers decent coverage, subsidies, and easy booking options - making it easily accessible to all. 
                            Overall, I would highly recommend Shirdi Homoeopathy Clinic for anyone in need of medical assistance!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        
                            <div>
                                <h3>Chidambara Vadivoo</h3>
                                <span>Auditor,Chennai</span>
                            </div>
                        </div>
                        <p>I was suffering from gynecology problems and I came to know about Dr.P. Gayathri Devi and went for treatment. She was very friendly and polite, so that I felt comfortable to explain my complications to her frankly. Was provided medicines and after taking medicines, I am relieved from my problems. I would suggest everyone to get treatment from her which does not have any side effects. Thanks to Dr. Gayathri Devi.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        
                            <div>
                                <h3>Ravichandran</h3>
                                <span>Manager,Production Of Medicines</span>
                            </div>
                        </div>
                        <p>Myself came to my native Chennai for the treatment gastritis from Punjab where I am working right now. I suffered a lot since last 3 years with severe gastritis affected my digestive systems and because of that gums became very weak. Could not work properly and I took allopathic medicines. Only temporary relief but lots of side effects and at last took leave for one month and came to Chennai. One of my friend recommend Shirdi Homoeo Clinic and within a week, I felt improvement in my health and especially no side effects. Now I am so energetic and with no gas problem again.</p>
                    </div>
                </li>
                
                <li>
                    <div className="slide">
                        <div className="user-info">
                        
                            <div>
                                <h3>Ganesh D</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>I suffered from left leg ankle pain because of my Body weight. I could not apply pressure to my left leg and literally i had to limp while walking. I heard about this Shirdi homeopathy clinic through one of my neighbor. Doctor asked about my health history, food habits and prescribed some homeopathy medicines for one month. But within one week, I felt my leg pain reduced. I recommend this clinic for cure all pain related body problems.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials