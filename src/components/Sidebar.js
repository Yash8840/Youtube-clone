import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
   const navigate = useNavigate()
   const homeHandler = ()=>{
      navigate('/')
   }
  return (
   // checking if this sidebar belongs to the "SingleVideo" page
    <div className='sidebar'>
      <div className='sidebar_categories'>
        <div className='sidebar_category' onClick={homeHandler}>
           <HomeIcon/><span>Home</span>
        </div>
        <div className='sidebar_category'>
           <LocalFireDepartmentIcon/><span>Trending</span>
        </div>
        <div className='sidebar_category'>
           <SubscriptionsIcon/><span>Subscriptions</span>
        </div>
        </div>
        <hr/>
        {}
        <div className='sidebar_categories'>
        <div className='sidebar_category'>
           <LibraryAddCheckIcon/><span>Library</span>
        </div>
        <div className='sidebar_category'>
           <HistoryIcon/><span>History</span>
        </div>
        <div className='sidebar_category'>
           <SlideshowIcon/><span>Your Videos</span>
        </div>
        <div className='sidebar_category'>
           <WatchLaterIcon/><span>Watch later</span>
        </div>
        <div className='sidebar_category'>
           <ThumbUpIcon/><span>Liked Videos</span>
        </div>
        
      </div>
      <hr/>
    </div>
  )
}

export default Sidebar