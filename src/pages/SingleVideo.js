import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import './SingleVideo.css';
import ReactPlayer from 'react-player';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import VideoItem from "../components/VideoItem";
import VideoContext from "../Context/VideoContext";

const SingleVideo = () => {
  const navigate = useNavigate();
  const videoCtx = useContext(VideoContext);
  console.log(videoCtx.list);
  const { id } = useParams();
  let a
  if(videoCtx.list){
  a = videoCtx.list.find((item)=>{
    return item.postId === id
  });
}
  console.log(a);

  useEffect(()=>{
   if(!a){
    navigate('/')
    console.log('crd');
   }
  },[a])
  return (
    <>
      <Header sidebar={true}/>
      <div className="mainBody">
        <Sidebar sidebar={true} />
        <div className="container">
          <div className="content">
            <div className="videoWrapper">
           <ReactPlayer className='react-player' url={a && a.submission.mediaUrl} width='100%'
          height='100%' playing={true} controls={true}/>
            </div>
            <div className="title">{a && a.submission.title}</div>
            <div className="details">
              <div className="info"><span>7,948,980 views * June 22, 2022</span></div>
              <div className="buttons">
                <button><ThumbUpIcon/><span>123</span></button>
                <button><ThumbDownIcon/></button>
                <button><ReplyIcon/><span>Share</span></button>
                <button><SaveAltIcon/><span>Save</span></button>
              </div>
            </div>
            
            <div className="channel">
              <div className="channelInfo">
                <img src={a && a.creator.pic} alt=""/>
                <div className="channelDetail">
                  <div className="channelName">{a && a.creator.handle}</div>
                  <div className="channelCounter">200k subscribers</div>
                  <div className="description">
                    {a && a.submission.description}
                  </div>
                </div>
              </div>
              <div className="subscribe">SUBSCRIBE</div>
            </div>
          </div>

          <div className="recommendation">
          {videoCtx.list && videoCtx.list.map((item)=>{
          return <NavLink to={`/video/${item.postId}`} key={item.postId}><VideoItem item={item} key={item.postId}/></NavLink>
        })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVideo;
