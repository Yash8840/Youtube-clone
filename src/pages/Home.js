import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import VideoSection from '../components/VideoSection'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <div className='mainBody'>
      <Sidebar />
      <VideoSection/>
      </div>
      
    </div>
  )
}

export default Home