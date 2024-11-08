import React from 'react'
import './Office.css'

import img_3 from '../../assets/img3.jpg'
import img_4 from '../../assets/img4.jpg'
import img_5 from '../../assets/img5.jpg'
import img_6 from '../../assets/img6.jpg'
import white_arrow from '../../assets/white-arrow.png'



const Office = () => {
  return (
    <div className='office'>
        <div className="gallery">
                   
            <img src={img_3} alt="" />
            <img src={img_4} alt="" />
            <img src={img_5} alt="" />
            <img src={img_6} alt="" />
            
        </div>
        <a href="http://www.besthomoeo.com/" target='_blank'>
        <button className='btn dar-btn'>See More here <img src={white_arrow} alt="" /></button>
        </a>
    </div>
  )
}

export default Office