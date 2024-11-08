import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/video-player.mp4'
import { X } from 'lucide-react';

const VideoPlayer = ({playState,onClose}) => {
  
  

    
  return (
    <div className={`videoplayer ${playState?'':'hide'}`} >
      <div>
        <button  onClick={onClose}className= 'btn'>< X size={30}/></button>
        <video src={video} autoPlay muted controls></video>
      </div>

    </div>
  )
}

export default VideoPlayer

