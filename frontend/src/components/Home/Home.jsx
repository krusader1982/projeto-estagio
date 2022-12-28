import React from 'react'
import logo from "../../assets/head.png"
import './Home.css'
import NavBar from '../NavBar/NavBar'


const Home = () => {
  return (
    <>
    <NavBar />
    <div className='home'>
      <div >
        <img className="logo"
          src={logo}
          alt="logo" />
      </div>
    </div>
    </>
    

  )
}

export default Home