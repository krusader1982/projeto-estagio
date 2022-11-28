import React from 'react'
import logo from "../../assets/head.png"
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
      <div >
        <img className="logo"
          src={logo}
          alt="logo" />
      </div>
    </div>

  )
}

export default Home