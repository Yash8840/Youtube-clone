import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const VideoItem = ({item}) => {
  //check if we are currently on the "SingleVideo" page(/video) to set the CSS accordingly
  let singleVideoPage = false;
  const { id } = useParams();
  if(id){
    console.log('singleVideoPage');
    singleVideoPage = true;
  }
  return (
      <>
      <div style={{backgroundColor: '#f9f9f9', borderRadius: '10px'}}>
      <div className={!singleVideoPage ? 'video' : 'newVideo'}>
      <div className={!singleVideoPage ? 'video_thumbnail' : 'newVideo_thumbnail'}>
        <img src={item ? item.submission.thumbnail : ''} alt=''/>
      </div>
      <div className={!singleVideoPage ? 'video_details' : 'newVideo_details'}>
        <div className={!singleVideoPage ? 'author' : 'remove_author'}>
          <img src={item ? item.creator.pic: ''} alt=''/>
        </div>
        <div className='title'>
          <h3>{item? item.submission.title: ''}</h3>
          <a href=''>{item ? item.creator.handle : ''}</a>
          <span>10M views -3months ago</span>
        </div>
      </div>
    </div>
    </div>
      </>
  )
}

export default VideoItem