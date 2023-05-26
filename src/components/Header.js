import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = (props) => {
 
  const toggleSidebarHandler = (e)=>{
    // checking if this header belongs to the "singleVideo page"
    if(props.sidebar){
          document.querySelector('.sidebar').classList.toggle('hide-sidebar');
    }else{
      document.querySelector('.sidebar').classList.toggle('hide-sidebar');
    }
  }

  
  return (
    <div className='header'>
      <div className='header_left'>
      <div onClick={toggleSidebarHandler} style={{cursor:'pointer'}}><MenuIcon/></div>
      <Link to='/'><img src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' alt="yoyube-logo"/></Link>
      </div>

      <div className='header_search'>
        <form action=''>
          <input type='text' placeholder='Search'/>
          <button><SearchIcon sx={{color: 'rgb(96,96,96)'  , cursor:'pointer'}}/></button>
        </form>
      </div>

      <div className='header_icons'>
       <div className='material-icon'><VideocamIcon sx={{color: 'rgb(96,96,96)' , marginRight:'12px' , cursor:'pointer'}} /></div>
       <div className='material-icon dont-display'><AppsIcon sx={{color: 'rgb(96,96,96)' , marginRight:'12px' , cursor:'pointer'}} /></div>
       <div className='material-icon dont-display'><NotificationsIcon sx={{color: 'rgb(96,96,96)' , marginRight:'12px'  , cursor:'pointer'}} /></div>
       <div className='material-icon'><AccountCircleIcon sx={{color: 'rgb(96,96,96)'  , cursor:'pointer'}} /></div>
      </div>
    </div>
  )

  }

export default Header