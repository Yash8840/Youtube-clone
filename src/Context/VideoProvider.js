import React, { useEffect, useState } from 'react'
import VideoContext from './VideoContext';


const VideoProvider = (props) => {
  const [list, setList] = useState();
  return (
    <VideoContext.Provider value={{list: list}}>{props.children}</VideoContext.Provider>
  )
}

export default VideoProvider