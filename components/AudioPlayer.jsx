"use client"

import React, {useState, useRef} from 'react'
import { FaPlayCircle , FaPauseCircle} from 'react-icons/fa'

const AudioPlayer = ({audioSourceURL}) => {
  // State
  const [isPlaying, setIsPlaying] = useState(false)

  // References
  const audioPlayer = useRef()

  const togglePlayPause = () => {
    const prevValue = isPlaying

    setIsPlaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
    }
  }

  return (
    <div>

    <audio ref={audioPlayer} src={audioSourceURL} preload="metadata"></audio>
      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPauseCircle   
                  size={40}
                  color="#FFFFFF"
                  className="hover:scale-110 duration-200"/> :

                <FaPlayCircle   
                  size={40}
                  color="#FFFFFF"
                  className="hover:scale-110 duration-200"/> }  
      </button>
    </div>
  )
}

export default AudioPlayer